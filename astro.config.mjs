import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTA: Cuando se confirme el dominio oficial de Hult Prize at UTP,
// actualizar `site` en astro.config.mjs y `siteUrl` en src/data/site.ts.
export default defineConfig({
  site: 'https://hultprize-utp.org',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/brand-qa'),
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
