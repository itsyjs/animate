import { defineConfig } from 'vite'

export default defineConfig({
  base: '/animate',
  build: {
    modulePreload: false,
    target: 'esnext',
  }
})
