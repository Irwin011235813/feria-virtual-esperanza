// ============================================
// VITE CONFIGURATION
// ============================================

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  server: {
    port: 3000,
    open: true,
    host: true
  },

  build: {
    minify: 'esbuild',         // ← soluciona "Minify JavaScript"
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa Firebase en su propio chunk
          'firebase-app':       ['firebase/app'],
          'firebase-auth':      ['firebase/auth'],
          'firebase-firestore': ['firebase/firestore'],
          'firebase-storage':   ['firebase/storage'],
          // Separa React en su propio chunk
          'react-vendor':       ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
});