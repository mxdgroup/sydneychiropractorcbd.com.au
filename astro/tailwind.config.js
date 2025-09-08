/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#ed2279',
        'custom-purple': '#1F2BA3',
        'text': '#7A7A7A',
        'custom-dark': '#333b55',
        // Adding CSS custom properties from BookLayout
        'primary-blue': 'rgb(0, 86, 179)',
        'primary-pink': 'rgba(223,47,109)',
        'purple': 'rgb(32, 32, 137)',
        'text-dark': '#333333',
        'text-light': '#ffffff',
        'link-hover': '#0e1346',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
  // Performance optimizations
  corePlugins: {
    // Disable unused features to reduce bundle size
    preflight: true,
    container: true,
  },
} 