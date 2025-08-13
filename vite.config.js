// import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     vueDevTools(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     },
//   },
// })

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import { fileURLToPath, URL } from 'node:url'

// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
//   },
//   server: {
//     proxy: {
//       // Point this to your backend; then use API_BASE_URL = '/api' in code
//       // '/api': { target: 'http://localhost:3001', changeOrigin: true },
//       '/api': { target: 'http://localhost:3001', changeOrigin: true }
//     },
//   },
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        // ⬇️ strip the /api prefix so /api/tasks -> http://localhost:3001/tasks
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
