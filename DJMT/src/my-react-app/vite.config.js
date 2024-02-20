import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__filename)
console.log(__dirname)
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.join(__dirname, 'index.html'),
      },
    },
  },
  define: {
    global: {},
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8093',
        changeOrigin: true,
      },
      '/chat': {
        target: 'http:localhost:4000',
        changeOrigin: true,
      },
    },
  },
})
