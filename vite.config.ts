/// <reference types="vitest" />
/// <reference types="vite/client"/>

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ include: '**/*.svg?react' }), react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  define: {
    global: 'window',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
