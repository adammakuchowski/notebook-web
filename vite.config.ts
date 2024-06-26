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
      contexts: path.resolve(__dirname, './src/contexts'),
      features: path.resolve(__dirname, './src/features'),
      pages: path.resolve(__dirname, './src/pages'),
      hooks: path.resolve(__dirname, './src/hooks'),
      hocs: path.resolve(__dirname, './src/hocs'),
      layouts: path.resolve(__dirname, './src/layouts'),
      types: path.resolve(__dirname, './src/types'),
      middlewares: path.resolve(__dirname, './src/middlewares'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
})
