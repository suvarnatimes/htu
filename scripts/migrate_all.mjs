import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Cloudinary Credentials
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'hlrdvheu',
  api_key: process.env.CLOUDINARY_API_KEY || '443433858461651',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'VpBbyaZsyPoaTxvc3Cqoa53iUCU',
  secure: true
});

// 2. Turso HTTP Pipeline Credentials (bypasses @libsql/client migration bugs)
const rawUrl = process.env.TURSO_DATABASE_URL || 'libsql://htu-htuindia.aws-ap-southeast-1.turso.io';
const dbHost = rawUrl.replace('libsql://', 'https://').replace('http://', 'https://');
const pipelineUrl = `${dbHost}/v2/pipeline`;

const tursoToken = process.env.TURSO_AUTH_TOKEN || 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3OTQyNzcwMTQsImlkIjoiMDFhMWMzMjItNWMwMS03YmVmLWIwMzMtNTYwNzRlMGE2YjEyIiwia2lkIjoiaWxPZUZtRE9sMERhWXREOFJDanV6dVoyLTNGcWd3eTJhdmpCQ2pvTEdWUSIsInJpZCI6Ijg3NmE5NzZmLWViYzItNDdhMC04NjA4LThhYmIxODViNTc3YiJ9.5MMyUYqrdw3_WibEz-e2ivCjSbpAbDZlAy7zk28MA4UnzjGU2OxmiKSh3tRFJZg65qBu7ogvZtnaE2U4SS53Cg';

async function tursoQuery(sql, args = []) {
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
    const errorText = await response.text();
    throw new Error(`Turso HTTP Error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  const firstResult = data.results?.[0];
  if (firstResult?.type === 'error') {
    throw new Error(`Turso SQL Error: ${firstResult.error?.message}`);
  }

  return firstResult?.response?.result;
}

async function main() {
  console.log('========================================================');
  console.log('HTU INDIA: AUTOMATED CLOUDINARY & TURSO MIGRATION');
  console.log('Connecting directly to Turso Edge Pipeline:', pipelineUrl);
  console.log('========================================================');

  // Step 1: Ensure Table Exists
  console.log('\n[1/3] Ensuring Turso Database Table exists...');
  await tursoQuery(`
    CREATE TABLE IF NOT EXISTS certificates (
      id TEXT PRIMARY KEY,
      cert_no TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      surname TEXT,
      full_name TEXT NOT NULL,
      address TEXT,
      degree TEXT NOT NULL,
      category TEXT NOT NULL,
      date TEXT NOT NULL,
      place TEXT NOT NULL,
      image_url TEXT,
      status TEXT DEFAULT 'Conferred & Active',
      chancellor TEXT DEFAULT 'Dr. Davidpaul Arjilli',
      synod TEXT DEFAULT "Cathedral Episcopal Synod Bishop's Council",
      created_at INTEGER DEFAULT (strftime('%s', 'now'))
    );
  `);
  console.log('✓ Turso table `certificates` verified successfully.');

  // Step 2: Read Students
  const dataPath = path.join(__dirname, '../src/data/students.json');
  const students = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  console.log(`\n[2/3] Loaded ${students.length} recipient records from local dataset.`);

  // Step 3: Iterate and upload
  console.log('\n[3/3] Migrating photos to Cloudinary & saving records to Turso...\n');
  let successCount = 0;
  let cloudinaryCount = 0;

  for (let i = 0; i < students.length; i++) {
    const s = students[i];
    const cleanCertId = s.certNo.replace(/[^a-zA-Z0-9]/g, '_');
    let finalImageUrl = s.imageUrl;

    if (s.imageUrl && s.imageUrl.includes('drive.google.com')) {
      try {
        console.log(`[${i + 1}/${students.length}] Uploading photo for ${s.fullName} (${s.certNo})...`);
        const result = await cloudinary.uploader.upload(s.imageUrl, {
          folder: 'htu_students',
          public_id: cleanCertId,
          overwrite: true,
          transformation: [
            { width: 400, height: 500, crop: 'thumb', gravity: 'face' },
            { quality: 'auto', fetch_format: 'auto' }
          ]
        });
        finalImageUrl = result.secure_url;
        cloudinaryCount++;
        console.log(`    ↳ Uploaded to Cloudinary: ${finalImageUrl}`);
      } catch (err) {
        console.warn(`    ⚠ Cloudinary upload warning: ${err.message}. Retaining drive link.`);
      }
    }

    try {
      await tursoQuery(`
        INSERT INTO certificates 
        (id, cert_no, name, surname, full_name, address, degree, category, date, place, image_url, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(cert_no) DO UPDATE SET
          name=excluded.name,
          surname=excluded.surname,
          full_name=excluded.full_name,
          address=excluded.address,
          degree=excluded.degree,
          category=excluded.category,
          date=excluded.date,
          place=excluded.place,
          image_url=excluded.image_url,
          status=excluded.status;
      `, [
        s.id,
        s.certNo,
        s.name,
        s.surname || '',
        s.fullName,
        s.address || '',
        s.degree,
        s.category,
        s.date,
        s.place,
        finalImageUrl || '',
        s.status || 'Conferred & Active'
      ]);
      successCount++;
    } catch (err) {
      console.error(`    ✖ Failed to insert ${s.certNo}:`, err.message);
    }
  }

  console.log('\n========================================================');
  console.log('MIGRATION SUMMARY');
  console.log(`Total Records Processed: ${students.length}`);
  console.log(`Cloudinary Photos Stored: ${cloudinaryCount}`);
  console.log(`Records Synchronized to Turso: ${successCount}`);
  console.log('========================================================\n');
}

main().catch(err => {
  console.error('Fatal Migration Error:', err);
  process.exit(1);
});
