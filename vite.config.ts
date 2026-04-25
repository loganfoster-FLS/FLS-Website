import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
export default defineConfig({ plugins: [tailwindcss()], build: { rollupOptions: { input: { index: resolve(__dirname,'index.html'), about: resolve(__dirname,'about.html'), services: resolve(__dirname,'services.html'), portfolio: resolve(__dirname,'portfolio.html'), contact: resolve(__dirname,'contact.html'), start: resolve(__dirname,'start.html'), privacy: resolve(__dirname,'privacy.html') } } } })
