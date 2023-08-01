import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      data: '/src/data',
      pages: '/src/pages',
      utils: '/src/utils',
      schema: '/src/schema',
      assets: '/src/assets',
      router: '/src/router',
      components: '/src/components',
      styles: path.resolve(__dirname, './src/scss/styles.scss'),
    },
  },
});
