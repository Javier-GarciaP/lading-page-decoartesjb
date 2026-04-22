// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

export default defineConfig({
  // Importante: añade tu URL aquí para que el sitemap no dé error
  site: 'https://sjbdecoarte.vercel.app',
  output: 'static',

  integrations: [sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});