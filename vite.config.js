import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/] }),
    react(),
  ],
  publicDir: 'Img', // Serve Img/ como arquivos estáticos → /Favicon.png, /Logotipo.png
})
