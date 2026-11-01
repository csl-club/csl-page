// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://csl-club.github.io',
  base: '/csl-page',
  integrations: [svelte()]
});