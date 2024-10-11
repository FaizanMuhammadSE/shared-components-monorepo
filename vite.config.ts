import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'sharedComponents',
      filename: 'remoteEntry.js',
      exposes: {
        './Card': './src/components/Card/index.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    manifest: true,
    minify: false,
    cssCodeSplit: false,
  },
});
