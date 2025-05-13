import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: '.',                   // já tá na pasta front_end
  base: '/',                   // rota base pros assets
  publicDir: path.resolve(__dirname, 'public'), // se usar public/
  build: {
    outDir: path.resolve(__dirname, '../dist'), // build vai pra /dist na raiz
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
})

