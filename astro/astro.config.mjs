// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import icon from "astro-icon";
// @ts-ignore
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    tailwind(), 
    icon(),
    sitemap({
      customPages: [],
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en'
        }
      },
      serialize(item) {
        return {
          url: item.url,
          changefreq: 'weekly',
          lastmod: new Date(),
          priority: item.url === 'https://sydneychiropractorcbd.com.au/' ? 1.0 : 0.8
        };
      }
    }),
    robotsTxt()
  ],
  redirects: {
    "/complete-spinal-health-program/": "/",
    "/our_team/dr-angus-phelps/": "/about-clinic27",
    "/our_team/dr-hooman-zahedi/": "/about-clinic27",
    "/team_member/dr-hooman-zahedi/": "/about-clinic27",
    "/our_team/william/": "/about-clinic27",
    "/our_team/dr-rebecca-squire/": "/about-clinic27",
  },
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