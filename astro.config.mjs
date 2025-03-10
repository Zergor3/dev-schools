// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: "/dev-schools/",
  vite: {
    plugins: [tailwindcss()]
  }
});