import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    outDir: resolve(__dirname, '../dist/public'), //  IMPORTANT
    emptyOutDir: true
  }
})
