<script setup lang="ts">
import '@/assets/main.css'
import { onMounted } from 'vue'

function urlB64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

onMounted(() => {
  if ('serviceWorker' in navigator) {
    console.log('Client: service worker registration in progress.')
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(function (registration) {
        console.log('Service Worker registered with scope:', registration.scope)
        registration.pushManager
          .subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlB64ToUint8Array(
              'BE_PTy1QJRs4hyZaKFenHI7dbnPUs9RbUQrCF8b6_929-0A7En41GW-jtLZC8y4cHEBQnVv_oygxK7l5nWWcgBE',
            ),
          })
          .then(function (subscription) {
            console.log('Push subscription:', subscription)
            // TODO: Send subscription to application server
          })
      })
  }
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
