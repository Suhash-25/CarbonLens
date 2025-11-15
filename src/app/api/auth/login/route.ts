import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // In a real app, you'd get the email/password like this:
  // const { email, password } = await request.json();
  
  // Here, we'll just simulate a 1-second delay
  await new Promise(res => setTimeout(res, 1000));

  // And then return a success message
  return NextResponse.json({ success: true, message: 'Login successful' });
}