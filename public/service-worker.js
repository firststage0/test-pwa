self.addEventListener('push', function (event) {
  console.log('[Service Worker] Push Received.')
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`)

  const title = 'Push Notification'
  const options = {
    body: 'This is a push notification.',
    icon: 'icon.png',
    badge: 'badge.png',
  }
  const notificationPromise = self.registration.showNotification(title, options)
  event.waitUntil(notificationPromise)
})

self.addEventListener('notificationclick', function (event) {
  console.log('[Service Worker] Notification click Received.')
  event.notification.close()

  event.waitUntil(self.clients.openWindow('example.com'))
})

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

self.addEventListener('pushsubscriptionchange', function (event) {
  console.log("[Service Worker]: 'pushsubscriptionchange' event fired.")
  const applicationServerKey = urlB64ToUint8Array(
    'BE_PTy1QJRs4hyZaKFenHI7dbnPUs9RbUQrCF8b6_929-0A7En41GW-jtLZC8y4cHEBQnVv_oygxK7l5nWWcgBE',
  )
  event.waitUntil(
    self.registration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey,
      })
      .then(function (newSubscription) {
        // TODO: Send to application server
        console.log('[Service Worker] New subscription: ', newSubscription)
      }),
  )
})
