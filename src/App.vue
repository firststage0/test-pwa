<script setup lang="ts">
import '@/assets/main.css'
import { onMounted } from 'vue'
import { useStore } from '@/stores/store'
const store = useStore()

onMounted(() => {
  store.subscribePushNotifications()
  setTimeout(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification('Hello World!', {
          body: 'This is a test notification.',
          icon: '/icon.png',
          data: {
            url: '/',
          },
        })
      })
    }
  }, 2000)
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
