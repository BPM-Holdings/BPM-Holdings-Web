import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Pure static build — no API proxy, deploys as-is to Vercel.
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
})
