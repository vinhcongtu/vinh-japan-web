import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. SECURITY: Lấy Key và URL từ biến môi trường Server
    const scriptUrl = process.env.APPS_SCRIPT_URL;
    const scriptSecret = process.env.APPS_SCRIPT_SECRET;

    if (!scriptUrl || !scriptSecret) {
      return NextResponse.json({ result: 'error', message: 'Missing Server Config' }, { status: 500 });
    }

    // 2. Gắn chìa khóa vào gói tin
    const payload = {
      ...body,
      api_secret: scriptSecret
    };

    // 3. Gửi sang Google Sheet (Server-to-Server)
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json({ result: 'error', message: 'Internal Server Error' }, { status: 500 });
  }
}
