import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // In a real app, you'd get the form data:
  // const { fullName, email, password } = await request.json();
  
  // Here, we'll just simulate a 1.5-second delay
  await new Promise(res => setTimeout(res, 1500));

  // And then return a success message
  return NextResponse.json({ success: true, message: 'User registered' });
}