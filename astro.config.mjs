// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
  integrations: [react({
    include: ['**/react/*'],
    experimentalReactChildren: true,
  }),],
});
