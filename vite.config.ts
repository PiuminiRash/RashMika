import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/RashMika/',   // 🔴 REQUIRED for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
