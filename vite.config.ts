import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: path.resolve(__dirname, './src/api'),
      app: path.resolve(__dirname, './src/app'),
      components: path.resolve(__dirname, './src/components'),
      config: path.resolve(__dirname, './src/config'),
      feature: path.resolve(__dirname, './src/feature'),
      pages: path.resolve(__dirname, './src/pages')
    }
  }
})
