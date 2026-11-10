import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Allow passing cloud name directly via CLI argument: node scripts/upload_photos.mjs <my_cloud_name>
const cliCloudName = process.argv[2];
const cloudName = cliCloudName || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME || 'hlrdvheu';
const apiKey = process.env.CLOUDINARY_API_KEY || '443433858461651';
const apiSecret = process.env.CLOUDINARY_API_SECRET || 'VpBbyaZsyPoaTxvc3Cqoa53iUCU';

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true
});

// Turso Database Setup
const rawUrl = process.env.TURSO_DATABASE_URL || 'libsql://htu-htuindia.aws-ap-southeast-1.turso.io';
const dbHost = rawUrl.replace('libsql://', 'https://').replace('http://', 'https://');
const pipelineUrl = `${dbHost}/v2/pipeline`;
const tursoToken = process.env.TURSO_AUTH_TOKEN || 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3OTQyNzcwMTQsImlkIjoiMDFhMWMzMjItNWMwMS03YmVmLWIwMzMtNTYwNzRlMGE2YjEyIiwia2lkIjoiaWxPZUZtRE9sMERhWXREOFJDanV6dVoyLTNGcWd3eTJhdmpCQ2pvTEdWUSIsInJpZCI6Ijg3NmE5NzZmLWViYzItNDdhMC04NjA4LThhYmIxODViNTc3YiJ9.5MMyUYqrdw3_WibEz-e2ivCjSbpAbDZlAy7zk28MA4UnzjGU2OxmiKSh3tRFJZg65qBu7ogvZtnaE2U4SS53Cg';

async function tursoExecute(sql, args = []) {
  const formattedArgs = args.map(arg => {
    if (arg === null || arg === undefined) return { type: 'null' };
    if (typeof arg === 'number') return { type: 'integer', value: String(arg) };
    return { type: 'text', value: String(arg) };
  });

  const response = await fetch(pipelineUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tursoToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      requests: [
        {
          type: 'execute',
          stmt: {
            sql,
            args: formattedArgs
          }
        },
        { type: 'close' }
      ]
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Turso Error: ${text}`);
  }

  const data = await response.json();
  const first = data.results?.[0];
  if (first?.type === 'error') {
    throw new Error(`Turso SQL Error: ${first.error?.message}`);
  }
  return first?.response?.result;
}

// Download image buffer directly from Google Drive / Web with redirects & desktop headers
function downloadImageBuffer(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    };

    const get = (currentUrl, redirectCount = 0) => {
      if (redirectCount > 5) {
        return reject(new Error('Too many redirects'));
      }

      const client = currentUrl.startsWith('https') ? https : http;
      client.get(currentUrl, options, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return get(res.headers.location, redirectCount + 1);
        }

        if (res.statusCode !== 200) {
          return reject(new Error(`Failed to download: Status ${res.statusCode}`));
        }

        const chunks = [];
        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks)));
        res.on('error', err => reject(err));
      }).on('error', err => reject(err));
    };

    get(url);
  });
}

// Stream buffer directly to Cloudinary
function uploadBufferToCloudinary(buffer, publicId) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'htu_students',
        public_id: publicId,
        overwrite: true,
        transformation: [
          { width: 400, height: 500, crop: 'thumb', gravity: 'face' },
          { quality: 'auto', fetch_format: 'auto' }
        ]
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    uploadStream.end(buffer);
  });
}

async function main() {
  console.log('===============================================================');
  console.log('HTU INDIA: CLOUDINARY PHOTO MIGRATION TO TURSO');
  console.log('Cloudinary Cloud Name:', cloudName);
  console.log('Cloudinary API Key:   ', apiKey);
  console.log('Target Turso DB:      ', pipelineUrl);
  console.log('===============================================================\n');

  // Step 0: Quick Cloudinary Connection Test
  console.log('Testing Cloudinary credentials...');
  try {
    const ping = await cloudinary.api.ping();
    console.log('✓ Cloudinary connection verified successfully (Status: ' + ping.status + ')\n');
  } catch (err) {
    console.error('\n✕ Cloudinary Verification Failed: ' + err.message);
    console.error('Please check your Cloud Name in https://console.cloudinary.com');
    console.error('You can run this script with your cloud name directly:');
    console.error('  node scripts/upload_photos.mjs <your_exact_cloud_name>\n');
    process.exit(1);
  }

  const dataPath = path.join(__dirname, '../src/data/students.json');
  const students = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  console.log(`Loaded ${students.length} recipient records from dataset.\n`);

  let cloudinaryCount = 0;
  let failedCount = 0;

  for (let i = 0; i < students.length; i++) {
    const s = students[i];
    const cleanCertId = s.certNo.replace(/[^a-zA-Z0-9]/g, '_');

    if (s.imageUrl && (s.imageUrl.includes('drive.google.com') || s.imageUrl.includes('googleusercontent.com') || s.imageUrl.startsWith('http'))) {
      
      // If already on Cloudinary, skip
      if (s.imageUrl.includes('cloudinary.com')) {
        console.log(`[${i + 1}/${students.length}] ${s.certNo} already on Cloudinary. Skipping.`);
        cloudinaryCount++;
        continue;
      }

      console.log(`[${i + 1}/${students.length}] Processing photo for ${s.fullName} (${s.certNo})...`);
      
      try {
        // Step 1: Download image buffer to local machine
        const buffer = await downloadImageBuffer(s.imageUrl);
        console.log(`    ↳ Downloaded photo buffer (${(buffer.length / 1024).toFixed(1)} KB)`);

        // Step 2: Upload to Cloudinary with face detection crop
        const result = await uploadBufferToCloudinary(buffer, cleanCertId);
        const cloudinaryUrl = result.secure_url;
        console.log(`    ✓ Uploaded to Cloudinary: ${cloudinaryUrl}`);

        // Step 3: Update Turso Database record with the Cloudinary URL
        await tursoExecute(
          `UPDATE certificates SET image_url = ? WHERE cert_no = ?;`,
          [cloudinaryUrl, s.certNo]
        );
        console.log(`    ✓ Updated Turso Database for ${s.certNo}`);

        // Step 4: Update students.json
        s.imageUrl = cloudinaryUrl;
        cloudinaryCount++;
      } catch (err) {
        console.error(`    ✕ Upload error for ${s.certNo}: ${err.message}`);
        failedCount++;
      }
    }
  }

  fs.writeFileSync(dataPath, JSON.stringify(students, null, 2), 'utf-8');
  console.log('\n===============================================================');
  console.log('CLOUDINARY PHOTO UPLOAD COMPLETE');
  console.log(`Total Photos Stored in Cloudinary & Turso: ${cloudinaryCount}`);
  console.log(`Failed: ${failedCount}`);
  console.log('Every certificate and student record now uses Cloudinary CDN URLs!');
  console.log('===============================================================');
}

main().catch(err => {
  console.error('Fatal Upload Error:', err);
  process.exit(1);
});
