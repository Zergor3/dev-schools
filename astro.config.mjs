// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Zergor3.github.io',
  base: "dev-schools",
  vite: {
    plugins: [tailwindcss()]
  }
});