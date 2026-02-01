import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@student-web": path.resolve(__dirname, "./src/student-web"),
      "@admin-web": path.resolve(__dirname, "./src/admin-web"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
})
