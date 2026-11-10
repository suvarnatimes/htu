/**
 * Hope Theological University - Real Image Downloader
 * Downloads official images directly from https://htuindia.in/
 * Run via: node scripts/download_images.js or npm run download-images
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imagesToDownload = [
  {
    url: 'https://htuindia.in/wp-content/uploads/slider/cache/647df817df2a64ad83446ae1a23d7fcd/KNS6385-1-scaled-1.jpg',
    filename: 'convocation-hero.jpg',
    title: 'Main Convocation Banner (KNS6385)'
  },
  {
    url: 'https://htuindia.in/wp-content/uploads/slider/cache/ab4e81a840c30cea1dd0b2baa5cd3226/FB_IMG_1712246045227-1.jpg',
    filename: 'pastors-faculty.jpg',
    title: 'University Leadership & Pastors Assembly'
  },
  {
    url: 'https://htuindia.in/wp-content/uploads/slider/cache/4ba8a65d802c77aef252d2ed23b2109a/FB_IMG_1712246159989-1.jpg',
    filename: 'theology-students.jpg',
    title: 'Academic Classroom & Theological Students'
  },
  {
    url: 'https://htuindia.in/wp-content/uploads/2025/05/HTUWEB-BANNER.jpg',
    filename: 'htu-web-banner.jpg',
    title: 'Official HTU Web Banner'
  },
  {
    url: 'https://htuindia.in/wp-content/uploads/2025/05/D1.jpg',
    filename: 'dr-john-wesly.jpg',
    title: 'Dr. BOLLAVARAPU JOHN WESLY (D1.jpg)'
  },
  {
    url: 'https://htuindia.in/wp-content/uploads/2025/05/D2.jpg',
    filename: 'dr-vallepu-varaprasad.jpg',
    title: 'Dr. VALLEPU VARAPRASAD (D2.jpg)'
  },
  {
    url: 'https://htuindia.in/wp-content/uploads/2025/05/D3.jpg',
    filename: 'dr-vempati-raghuram.jpg',
    title: 'Dr. VEMPATI RAGHURAM (D3.jpg)'
  }
];

console.log('Downloading real images from https://htuindia.in/...\n');

let completed = 0;

imagesToDownload.forEach((item) => {
  const dest = path.join(outputDir, item.filename);
  const file = fs.createWriteStream(dest);

  https.get(item.url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  }, (response) => {
    if (response.statusCode >= 200 && response.statusCode < 300) {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        completed++;
        console.log(`[OK] Downloaded: ${item.title} -> ${item.filename}`);
        if (completed === imagesToDownload.length) {
          console.log('\nAll real images successfully downloaded into public/images/!');
        }
      });
    } else {
      file.close();
      fs.unlinkSync(dest);
      console.log(`[NOTE] ${item.filename} status code: ${response.statusCode} (URL: ${item.url})`);
    }
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error(`[ERROR] Failed to download ${item.filename}:`, err.message);
  });
});
