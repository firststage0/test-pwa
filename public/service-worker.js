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

  event.waitUntil(clients.openWindow('example.com'))
})

self.addEventListener('pushsubscriptionchange', function (event) {
  console.log("[Service Worker]: 'pushsubscriptionchange' event fired.")
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey)
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
