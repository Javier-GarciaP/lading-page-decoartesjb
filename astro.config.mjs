// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // Usamos 'server' para que funcionen tus APIs de correo
  output: 'server',

  integrations: [preact(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare({
    imageService: 'compile',
    // Esta opción deshabilita las funciones automáticas que buscan el KV de SESSION
    cloudflareModules: false,
    platformProxy: {
      enabled: true,
    },
  }),


});