import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

//127.0.0.1 vs 0.0.0.0 -> docker에서 포트 포워딩할때 문제가됨
export default defineConfig({
  server: {
    port: 5173,
    host: "0.0.0.0",
  },
  plugins: [react()],
})
