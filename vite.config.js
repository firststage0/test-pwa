import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: { enabled: true },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        globDirectory: 'public',
      },
      includeAssets: ['fonts/*.ttf', 'images/*.png', 'css/*.css'],
      manifest: {
        short_name: 'Пример PWA',
        name: 'Пример прогрессивного веб-приложения',
        start_url: '.',
        display: 'standalone',
        theme_color: '#333333',
        background_color: '#000000',
        orientation: 'portrait',
        icons: [
          {
            src: '/images/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: '/images/desctop.png',
            sizes: '1280x720',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: '/images/mobile.png',
            sizes: '1080x1920',
            type: 'image/png',
          },
        ],
        prefer_related_applications: false,
      },
    }),
  ],
  // server: {
  //   port: 3000,
  //   mimeTypes: {
  //     js: 'application/javascript',
  //   },
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: './',
})
