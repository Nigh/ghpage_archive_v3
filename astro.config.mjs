// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import dotenv from 'dotenv';
import icon from 'astro-icon';
dotenv.config();

const BASE_PATH = process.env.PUBLIC_BASE_URL || '/'; // Default to '/'
const SITE_URL = process.env.PUBLIC_SITE_URL || 'http://localhost:4321'; // Default for local dev

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), icon(), mdx()],
  base: BASE_PATH,
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    syntaxHighlight: false, // <-- disables Shiki (which adds inline styles)
  },
});
