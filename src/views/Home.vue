<script setup lang="ts">
import data from '@/data/data.json'
import ItemComponent from '@/components/ItemComponent.vue'
import { useStore } from '@/stores/store'
const store = useStore()
</script>

<template>
  <div class="home-page">
    <div class="content">
      <router-link
        class="router-link"
        to="/about"
        v-for="(item, index) in data"
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
