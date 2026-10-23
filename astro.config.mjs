import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://YOUR-DOMAIN.com",
  integrations: [sitemap()],
  output: "static",
});