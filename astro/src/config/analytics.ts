// Analytics Configuration
// Update these values with your actual analytics IDs and settings

export const analyticsConfig = {
  // Google Analytics 4
  googleAnalytics: {
    enabled: false, // Set to true to enable Google Analytics
    measurementId: 'GA_MEASUREMENT_ID', // Replace with your GA4 Measurement ID
    debugMode: false, // Set to true for debug mode in development
  },
  
  // Facebook Pixel
  facebookPixel: {
    enabled: false, // Set to true to enable Facebook Pixel
    pixelId: 'YOUR_PIXEL_ID', // Replace with your Facebook Pixel ID
  },
  
  // Google Tag Manager
  googleTagManager: {
    enabled: true, // Set to true to enable Google Tag Manager
    containerId: 'GTM-WZLQ9N7', // Replace with your GTM Container ID
  },
  
  // PostHog
  posthog: {
    enabled: true, // Set to true to enable PostHog
    apiKey: 'phc_ouzZokwmcnIr4PXJXJLDBILtIBzdUJIGTP519V6n511', // Replace with your PostHog API Key
    apiHost: 'https://app.posthog.com', // Or your self-hosted instance URL
  },
  
  // Hotjar
  hotjar: {
    enabled: false, // Set to true to enable Hotjar
    siteId: 'YOUR_SITE_ID', // Replace with your Hotjar Site ID
    version: '6', // Hotjar version
  },
  
  // Other Analytics Services
  other: {
    // Add other analytics services here
    // Example: Mixpanel, Amplitude, etc.
  }
};

// Helper function to check if analytics should be loaded
export const shouldLoadAnalytics = () => {
  // Only load analytics in production
  return process.env.NODE_ENV === 'production';
};

// Helper function to get analytics config for current environment
export const getAnalyticsConfig = () => {
  if (!shouldLoadAnalytics()) {
    return {
      googleAnalytics: { enabled: false },
      facebookPixel: { enabled: false },
      googleTagManager: { enabled: false },
      hotjar: { enabled: false },
      other: {}
    };
  }
  
  return analyticsConfig;
}; 