// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // Importante: añade tu URL aquí para que el sitemap no dé error
  site: 'https://decoartesjb.pages.dev', 
  output: 'server',

  integrations: [preact(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare({
    // Cambia cloudflareModules a true si vas a usar funciones de Cloudflare, 
    // pero para Pages lo ideal es dejarlo sencillo
    platformProxy: {
      enabled: true,
    },
  }),
});