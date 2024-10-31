<script setup lang="ts">
import data from '@/data/data.json'
import ItemComponent from '@/components/ItemComponent.vue'
import { useStore } from '@/stores/store'

// import { webpush } from 'web-push'

const store = useStore()

const getNotify = () => {
  // VAPID keys should be generated only once.
  // webpush.setVapidDetails(
  //   'mailto:example@yourdomain.org',
  //   'BE_PTy1QJRs4hyZaKFenHI7dbnPUs9RbUQrCF8b6_929-0A7En41GW-jtLZC8y4cHEBQnVv_oygxK7l5nWWcgBE',
  //   'GzTHrF-ufM7TMLeDP97o0UNhUCePUyougZR9PRnisHA',
  // )
  // // This is the same output of calling JSON.stringify on a PushSubscription
  // const pushSubscription = {
  //   endpoint:
  //     'https://fcm.googleapis.com/fcm/send/ddZpuAZqqMU:APA91bFvqXfi37mHmHOqGyHtR2k4Sbyb4R1FhIfts3uKuK_bsLODc3gdtl_nRBGQEZONGoVYrcOAwZ-RxEyFWRlmb7qZd82JW_G9Imj31a7LqzFMorxUaDLHYehD60aVe-IDPnSTi6TK',
  //   keys: {
  //     auth: '4guYFwPcOXm5kqvfgH2qdA',
  //     p256dh:
  //       'BLMi2XIVoIeDAWo3lrPvGCvbEEXcLgT478orbKWfrdjjZot0nlQuAEDaCkYSzbNjmPTp7R-DjoEwqteXCWtBzF4',
  //   },
  // }
  // webpush.sendNotification(pushSubscription, 'Your Push Payload Text')
}
</script>

<template>
  <button @click="getNotify">Get push notification</button>
  <div class="home-page">
    <div class="content">
      <router-link
        class="router-link"
        to="/about"
        v-for="(item, index) in data"
        :key="index"
        @click="store.itemID = index"
      >
        <ItemComponent :item="item" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  padding: 64px;
}

.router-link {
  width: 100%;
  display: flex;
}

.content {
  margin-bottom: 42px;
  margin-top: 120px;
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
