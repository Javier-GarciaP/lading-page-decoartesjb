// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
import preact from '@astrojs/preact';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  integrations: [preact(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
  site: 'https://www.decoartesjb.vercel.app'
});