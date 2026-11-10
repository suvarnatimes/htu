import { NextResponse } from 'next/server';
import studentsData from '@/data/students.json';

const rawUrl = process.env.TURSO_DATABASE_URL || 'libsql://htu-htuindia.aws-ap-southeast-1.turso.io';
const dbHost = rawUrl.replace('libsql://', 'https://').replace('http://', 'https://');
const pipelineUrl = `${dbHost}/v2/pipeline`;
const tursoToken = process.env.TURSO_AUTH_TOKEN || '';

async function tursoQuery(sql: string, args: any[] = []) {
  if (!tursoToken) throw new Error('TURSO_AUTH_TOKEN is missing');

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

  const json = await response.json();
  const firstResult = json.results?.[0];
  if (firstResult?.type === 'error') {
    throw new Error(`Turso SQL Error: ${firstResult.error?.message}`);
  }

  return firstResult?.response?.result;
}

// GET: Fetch all certificates from Turso (or fallback)
export async function GET() {
  try {
    const result = await tursoQuery("SELECT * FROM certificates ORDER BY cert_no ASC");
    if (result && result.rows && result.rows.length > 0) {
      const cols = result.cols.map((c: any) => c.name);
      const records = result.rows.map((row: any[]) => {
        const item: any = {};
        cols.forEach((col: string, idx: number) => {
          item[col] = row[idx]?.value;
        });
        return {
          id: item.id || item.cert_no,
          certNo: item.cert_no,
          name: item.name,
          surname: item.surname || '',
          fullName: item.full_name || item.name,
          address: item.address || '',
          degree: item.degree,
          category: item.category,
          date: item.date,
          place: item.place,
          imageUrl: item.image_url || '',
          status: item.status || 'Conferred & Active'
        };
      });
      return NextResponse.json({ success: true, count: records.length, data: records, source: 'turso' });
    }
  } catch (err: any) {
    console.warn('Turso fetch failed, using local students dataset:', err.message);
  }

  return NextResponse.json({ success: true, count: studentsData.length, data: studentsData, source: 'local' });
}

// POST: Create a new certificate in Turso
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { certNo, name, surname, fullName, address, degree, category, date, place, imageUrl, status } = body;

    if (!certNo || !name || !degree) {
      return NextResponse.json({ error: 'certNo, name, and degree are required' }, { status: 400 });
    }

    const id = certNo;
    const finalFullName = fullName || `${name} ${surname || ''}`.trim();
    const finalStatus = status || 'Conferred & Active';

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
      id, certNo, name, surname || '', finalFullName, address || '', degree, category || 'Social Service', date || '2024-01-01', place || 'Hyderabad', imageUrl || '', finalStatus
    ]);

    return NextResponse.json({ success: true, message: `Certificate ${certNo} created successfully` });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT: Update an existing certificate in Turso
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { certNo, name, surname, fullName, address, degree, category, date, place, imageUrl, status } = body;

    if (!certNo) {
      return NextResponse.json({ error: 'certNo is required to update' }, { status: 400 });
    }

    const finalFullName = fullName || `${name} ${surname || ''}`.trim();

    await tursoQuery(`
      UPDATE certificates SET
        name = ?,
        surname = ?,
        full_name = ?,
        address = ?,
        degree = ?,
        category = ?,
        date = ?,
        place = ?,
        image_url = ?,
        status = ?
      WHERE UPPER(cert_no) = UPPER(?)
    `, [
      name, surname || '', finalFullName, address || '', degree, category, date, place, imageUrl || '', status || 'Conferred & Active', certNo
    ]);

    return NextResponse.json({ success: true, message: `Certificate ${certNo} updated successfully` });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE: Delete a certificate from Turso
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const certNo = searchParams.get('certNo');

    if (!certNo) {
      return NextResponse.json({ error: 'certNo is required' }, { status: 400 });
    }

    await tursoQuery("DELETE FROM certificates WHERE UPPER(cert_no) = UPPER(?)", [certNo]);

    return NextResponse.json({ success: true, message: `Certificate ${certNo} deleted successfully` });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
