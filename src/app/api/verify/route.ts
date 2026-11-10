import { NextResponse } from 'next/server';
import studentsData from '@/data/students.json';

const rawUrl = process.env.TURSO_DATABASE_URL || 'libsql://htu-htuindia.aws-ap-southeast-1.turso.io';
const dbHost = rawUrl.replace('libsql://', 'https://').replace('http://', 'https://');
const pipelineUrl = `${dbHost}/v2/pipeline`;
const tursoToken = process.env.TURSO_AUTH_TOKEN || '';

async function queryTurso(certNo: string) {
  if (!tursoToken) return null;
  const normalized = certNo.trim().toUpperCase().replace(/\s+/g, '');

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
            sql: "SELECT * FROM certificates WHERE UPPER(REPLACE(cert_no, ' ', '')) = ? LIMIT 1",
            args: [{ type: 'text', value: normalized }]
          }
        },
        { type: 'close' }
      ]
    })
  });

  if (!response.ok) return null;
  const json = await response.json();
  const rows = json.results?.[0]?.response?.result?.rows;
  if (!rows || rows.length === 0) return null;

  const cols = json.results[0].response.result.cols.map((c: any) => c.name);
  const row = rows[0];
  const record: any = {};
  cols.forEach((col: string, idx: number) => {
    record[col] = row[idx]?.value;
  });

  return {
    id: record.id || record.cert_no,
    certNo: record.cert_no,
    name: record.name,
    surname: record.surname,
    fullName: record.full_name || record.name,
    address: record.address,
    degree: record.degree,
    category: record.category,
    date: record.date,
    place: record.place,
    imageUrl: record.image_url,
    status: record.status || 'Conferred & Active',
    chancellor: record.chancellor || 'Dr. Davidpaul Arjilli',
    synod: record.synod || "Cathedral Episcopal Synod Bishop's Council"
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const certNo = searchParams.get('certNo');

  if (!certNo) {
    return NextResponse.json({ error: 'Certificate number is required' }, { status: 400 });
  }

  const clean = certNo.trim().toUpperCase().replace(/\s+/g, '');

  // 1. Try querying Turso live database
  try {
    const liveRecord = await queryTurso(clean);
    if (liveRecord) {
      return NextResponse.json({ found: true, record: liveRecord });
    }
  } catch (err) {
    console.warn('Turso query failed, falling back to local dataset:', err);
  }

  // 2. Fallback to local students.json dataset
  const localMatch = studentsData.find(s => 
    s.certNo.toUpperCase().replace(/\s+/g, '') === clean
  );

  if (localMatch) {
    return NextResponse.json({ found: true, record: localMatch });
  }

  return NextResponse.json({ found: false, message: 'No certificate found with this Certificate Number' }, { status: 404 });
}
