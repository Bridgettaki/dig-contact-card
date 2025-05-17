// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dig-contact-card/',  // <-- this should match your repo name
  plugins: [react()],
})
