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
    format: "directory"
  },
  site: "https://sydneychiropractorcbd.com.au"
});