import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend("re_43MSkjeo_9NfhgUUsivNPY4YuUWohCtyv");

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Handle URL-encoded form data
    const body = await request.text();
    const params = new URLSearchParams(body);
    const firstName = params.get('firstName') as string;
    const email = params.get('email') as string;
    const message = params.get('message') as string;

    if (!firstName || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All required fields must be filled' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['dimitrije@mxd.digital'],
      subject: `New Contact Form Submission from ${firstName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4a5568; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #4a5568; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #2d3748;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #718096; font-size: 12px;">
            <p>This email was sent from the contact form on sydneychiropractorcbd.com.au</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${firstName}
        Email: ${email}
        
        Message:
        ${message}
        
        ---
        This email was sent from the contact form on sydneychiropractorcbd.com.au
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}; 