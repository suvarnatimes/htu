import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
          stmt: { sql, args: formattedArgs }
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
  console.log('Seeding Turso database directly via pipeline:', pipelineUrl);
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
  console.log('Table verified.');

  const dataPath = path.join(__dirname, '../src/data/students.json');
  const students = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  console.log(`Seeding ${students.length} records...`);

  let count = 0;
  for (const s of students) {
    await tursoQuery(`
      INSERT OR REPLACE INTO certificates 
      (id, cert_no, name, surname, full_name, address, degree, category, date, place, image_url, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
      s.imageUrl || '',
      s.status || 'Conferred & Active'
    ]);
    count++;
  }
  console.log(`Successfully seeded ${count} records into Turso.`);
}

main().catch(console.error);
