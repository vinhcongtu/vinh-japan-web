import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const scriptUrl = process.env.APPS_SCRIPT_URL;
    const scriptSecret = process.env.APPS_SCRIPT_SECRET;

    if (!scriptUrl || !scriptSecret) {
      // For development/testing if env vars are missing
      console.warn("Missing APPS_SCRIPT_URL or APPS_SCRIPT_SECRET. Simulating success.");
      return NextResponse.json({ result: 'success', simulated: true });
    }

    const payload = { ...body, api_secret: scriptSecret };

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Lead Error:", error);
    return NextResponse.json({ result: 'error' }, { status: 500 });
  }
}
