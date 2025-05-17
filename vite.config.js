import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs' // 👈 change build output folder
  },
  base: '/dig-contact-card/' // 👈 adjust if your repo name is dig-contact-card
})
