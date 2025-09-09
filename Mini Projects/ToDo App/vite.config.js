import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/ToDo-App/', // Set this to your repository name
  server: {
    port: 5173, // Optional: You can change the dev server port
    open: true, // Automatically opens in browser
  },
  build: {
    outDir: 'dist', // Default build directory
    sourcemap: false, // Optional: disable source maps for smaller build
  },
});
