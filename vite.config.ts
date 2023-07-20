import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      data: '/src/data',
      pages: '/src/pages',
      utils: '/src/utils',
      assets: '/src/assets',
      components: '/src/components',
      styles: path.resolve(__dirname, './src/scss/styles.scss'),
    },
  },
});
