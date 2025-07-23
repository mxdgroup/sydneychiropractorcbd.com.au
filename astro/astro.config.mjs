// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";
// @ts-ignore
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    tailwind(), 
    icon(),
    sitemap({})
  ],
  trailingSlash: "always",
  build: {
    format: "directory",
    inlineStylesheets: "auto", // Inline critical CSS
  },
  vite: {
    build: {
      cssCodeSplit: false, // Bundle all CSS to reduce requests
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro'], // Separate vendor chunks
          }
        }
      }
    },
    css: {
      devSourcemap: false, // Disable source maps in production
    }
  },
  site: "https://sydneychiropractorcbd.com.au"
});