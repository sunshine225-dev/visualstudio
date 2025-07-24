import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    outDir: '../dist/public',
    emptyOutDir: true
  }
})