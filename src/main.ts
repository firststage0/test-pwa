import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/index.ts'
import App from './App.vue'
import '@/registerServiceWorker'
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope)
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error)
    })

  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('Разрешение на уведомления получено')
    }
  })
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
