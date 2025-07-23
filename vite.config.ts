import { defineConfig } from 'vite'
// Import the SWC plugin or the official React plugin:
import react from '@vitejs/plugin-react'  // Changed from '@vitejs/plugin-react-swc'
// Alternatively, if you prefer, use:
// import react from '@vitejs/plugin-react'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 5173,
    cors: {
      origin: '*',
      credentials: true,
    },
    allowedHosts: 'all',
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))