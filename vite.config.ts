import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/RashMika/',   // 🔴 REQUIRED (repo name)
  plugins: [react()],
  build: {
    outDir: 'build',
    target: 'es2019'
  }
});
