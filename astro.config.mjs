// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '#repo': fileURLToPath(import.meta.url),
        '#src': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      tailwindcss({ optimize: true }),
    ],
  },
});
