import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

export default defineConfig(({ mode }) => ({
  server: {
    host: true,    // listen di 0.0.0.0
    port: 2022,
    cors: {
      origin: '*',
      credentials: true,
    },
    // instead of a single string, use an array:
    allowedHosts: [
      'reinutechiot.com',
      'localhost',
      '127.0.0.1'
    ],
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
