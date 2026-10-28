import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site uses hash routing so it can be hosted on any static host
// (including GitHub Pages) without server-side rewrites.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    assetsDir: 'static',
  },
});
