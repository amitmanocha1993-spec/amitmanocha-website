import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Spam protection - basic rate limiting could be added here
    const timestamp = Date.now();
    const date = new Date(timestamp).toLocaleString();

    // Send email using Resend
    const { Resend } = await import('resend');
    const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Amit Manocha Website <onboarding@resend.dev>',
      to: process.env.CONTACT_RECEIVER || 'amietmanochaa@gmail.com',
      subject: 'New Poetry Page Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #00113a; margin-bottom: 20px;">New Poetry Page Subscription</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p>A visitor subscribed from the Poetry page.</p>
            <p style="margin-top: 10px;"><strong>Subscriber Email:</strong> ${email}</p>
            <p style="margin-top: 10px;"><strong>Date & Time:</strong> ${date}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Subscription notification sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Poetry subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
