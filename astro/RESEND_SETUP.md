# Resend Email Setup Guide

## 1. Get Your Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to your [API Keys page](https://resend.com/api-keys)
3. Create a new API key
4. Copy the API key (it starts with `re_`)

## 2. Set Environment Variables

Create a `.env` file in the `astro` directory with:

```
RESEND_API_KEY=your_actual_resend_api_key_here
```

**Important**: Replace `your_actual_resend_api_key_here` with your actual Resend API key.

## 3. Domain Configuration

### Option A: Using Resend's Default Domain (Easiest)
The current setup uses `noreply@clinic27.com.au` as the sender. If you don't own `clinic27.com.au`, you can:

1. Update the `from` field in `src/pages/api/contact.ts` to use Resend's default domain:
   ```typescript
   from: 'Contact Form <onboarding@resend.dev>',
   ```

### Option B: Using Your Own Domain (Recommended)
1. Add your domain to Resend
2. Configure DNS records as instructed by Resend
3. Update the `from` field in `src/pages/api/contact.ts` to use your domain

## 4. Email Recipients

Update the `to` field in `src/pages/api/contact.ts` to your actual email address:

```typescript
to: ['your-email@example.com'],
```

## 5. Test the Setup

1. Run the development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email inbox for the submission

## Troubleshooting

- **Error: "Failed to send email"**: Check that your API key is correct
- **Not receiving emails**: Check spam folder and verify the recipient email
- **Domain issues**: Use `onboarding@resend.dev` for testing

## Security Notes

- Never commit your `.env` file to version control
- Add `.env` to your `.gitignore` file
- Use environment variables in production (Netlify, Vercel, etc.) 