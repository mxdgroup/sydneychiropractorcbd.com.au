# Analytics Setup Guide

This guide explains how to add analytics to your Clinic 27 website.

## 📍 Analytics Code Location

Analytics code can be added in two places in `src/layouts/Layout.astro`:

1. **Head Section** (lines 47-75): For tracking scripts that need to load early
2. **End of Body** (lines 85-95): For scripts that need to run after page load

## 🔧 Available Analytics Services

### 1. Google Analytics 4 (GA4)

**Setup:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use existing one
3. Get your Measurement ID (format: G-XXXXXXXXXX)
4. Uncomment the Google Analytics section in `Layout.astro`
5. Replace `GA_MEASUREMENT_ID` with your actual Measurement ID

**Code Location:** Head section, lines 49-57

### 2. Facebook Pixel

**Setup:**
1. Go to [Facebook Business Manager](https://business.facebook.com/)
2. Create a new Pixel or use existing one
3. Get your Pixel ID
4. Uncomment the Facebook Pixel section in `Layout.astro`
5. Replace `YOUR_PIXEL_ID` with your actual Pixel ID

**Code Location:** Head section, lines 59-72

### 3. Google Tag Manager (GTM)

**Setup:**
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new container or use existing one
3. Get your Container ID (format: GTM-XXXXXXX)
4. Uncomment the GTM section in `Layout.astro`
5. Replace `GTM-XXXXXXX` with your actual Container ID

**Code Location:** Head section (add if needed)

### 4. Hotjar

**Setup:**
1. Go to [Hotjar](https://www.hotjar.com/)
2. Create a new site or use existing one
3. Get your Site ID
4. Uncomment the Hotjar section in `Layout.astro`
5. Replace `YOUR_SITE_ID` with your actual Site ID

**Code Location:** Head section (add if needed)

## 🚀 Quick Setup Instructions

### To Enable Google Analytics:

1. Open `src/layouts/Layout.astro`
2. Find the Google Analytics section (lines 49-57)
3. Remove the comment markers (`<!--` and `-->`)
4. Replace `GA_MEASUREMENT_ID` with your actual GA4 Measurement ID
5. Save and deploy

### To Enable Facebook Pixel:

1. Open `src/layouts/Layout.astro`
2. Find the Facebook Pixel section (lines 59-72)
3. Remove the comment markers (`<!--` and `-->`)
4. Replace `YOUR_PIXEL_ID` with your actual Facebook Pixel ID
5. Save and deploy

## 📊 Configuration File

You can also use the configuration file at `src/config/analytics.ts` to manage analytics settings centrally:

```typescript
export const analyticsConfig = {
  googleAnalytics: {
    enabled: true,
    measurementId: 'G-XXXXXXXXXX',
  },
  facebookPixel: {
    enabled: true,
    pixelId: '123456789',
  }
};
```

## 🔒 Privacy Compliance

The privacy policy already mentions Google Analytics and Facebook Pixel usage. Make sure to:

1. Update your privacy policy if you add new analytics services
2. Ensure compliance with GDPR, CCPA, and other privacy regulations
3. Consider implementing cookie consent if required

## 🧪 Testing

- Analytics only load in production by default
- Use browser developer tools to verify tracking is working
- Check your analytics dashboard to confirm data is being received

## 📝 Notes

- All analytics code is commented out by default
- Analytics only load in production environment
- Performance optimizations are maintained with analytics
- External analytics scripts are loaded asynchronously to avoid blocking page load 