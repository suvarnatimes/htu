import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME || 'hlrdvheu',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

const rawUrl = process.env.TURSO_DATABASE_URL || 'libsql://htu-htuindia.aws-ap-southeast-1.turso.io';
const dbHost = rawUrl.replace('libsql://', 'https://').replace('http://', 'https://');
const pipelineUrl = `${dbHost}/v2/pipeline`;
const tursoToken = process.env.TURSO_AUTH_TOKEN || '';

async function tursoQuery(sql: string, args: any[] = []) {
  if (!tursoToken) return null;

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
    throw new Error(`Turso Error: ${errorText}`);
  }

  const json = await response.json();
  return json.results?.[0]?.response?.result;
}

function getCloudinaryPublicId(url: string): string | null {
  if (!url || !url.includes('cloudinary.com')) return null;
  const match = url.match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.[a-zA-Z0-9]+)?$/);
  return match ? match[1] : null;
}

// POST: Upload an image to Cloudinary and update Turso
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const certNo = formData.get('certNo') as string | null;
    const oldImageUrl = formData.get('oldImageUrl') as string | null;

    if (!file) {
      return NextResponse.json({ error: 'No image file provided' }, { status: 400 });
    }

    // 1. Delete past image from Cloudinary if replacing
    if (oldImageUrl) {
      const oldPublicId = getCloudinaryPublicId(oldImageUrl);
      if (oldPublicId) {
        try {
          await cloudinary.uploader.destroy(oldPublicId);
        } catch (e: any) {
          console.warn('Failed to delete old image from Cloudinary:', e.message);
        }
      }
    }

    // 2. Upload new image to Cloudinary
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const safeCertName = certNo ? certNo.replace(/[^a-zA-Z0-9_-]/g, '_') : `cert_${Date.now()}`;
    const uploadResult = await new Promise<any>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: 'htu_certificates',
          public_id: `${safeCertName}_${Date.now()}`,
          resource_type: 'image',
          transformation: [
            { width: 800, height: 1000, crop: 'limit' },
            { quality: 'auto' }
          ]
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    const secureUrl = uploadResult.secure_url;

    // 3. If certNo is provided, update Turso immediately
    if (certNo) {
      try {
        await tursoQuery(
          "UPDATE certificates SET image_url = ? WHERE UPPER(cert_no) = UPPER(?)",
          [secureUrl, certNo]
        );
      } catch (dbErr: any) {
        console.warn('Turso auto-update warning:', dbErr.message);
      }
    }

    return NextResponse.json({
      success: true,
      imageUrl: secureUrl,
      publicId: uploadResult.public_id,
      message: 'Photo uploaded to Cloudinary successfully'
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Image upload failed' }, { status: 500 });
  }
}

// DELETE: Remove an image from Cloudinary and Turso
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const imageUrl = searchParams.get('imageUrl');
    const certNo = searchParams.get('certNo');

    if (!imageUrl && !certNo) {
      return NextResponse.json({ error: 'imageUrl or certNo required' }, { status: 400 });
    }

    // 1. Delete from Cloudinary if imageUrl provided
    if (imageUrl) {
      const publicId = getCloudinaryPublicId(imageUrl);
      if (publicId) {
        try {
          await cloudinary.uploader.destroy(publicId);
        } catch (e: any) {
          console.warn('Failed to delete image from Cloudinary:', e.message);
        }
      }
    }

    // 2. Clear image_url in Turso if certNo provided
    if (certNo) {
      try {
        await tursoQuery(
          "UPDATE certificates SET image_url = '' WHERE UPPER(cert_no) = UPPER(?)",
          [certNo]
        );
      } catch (dbErr: any) {
        console.warn('Failed to update Turso:', dbErr.message);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Image removed from Cloudinary and Turso successfully'
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Image deletion failed' }, { status: 500 });
  }
}
