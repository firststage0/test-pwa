<script setup lang="ts">
import data from '@/data/data.json'
import { useStore } from '@/stores/store'

type Item = {
  Name: string
  Category: string
  Characteristics: string[]
  Price: number
  ImageUrl: string
  Description: string
}

const store = useStore()
const item: Item = data[store.itemID]
console.log(item)

const imgDiv = {
  backgroundImage: `url(src/images/${item.ImageUrl})`,
}
</script>

<template>
  <div class="page">
    <router-link class="router-link" to="/"> to home page </router-link>

    <div class="item">
      <div class="left-block">
        <div class="item-image" :style="imgDiv"></div>
        <p class="item-price">Цена: {{ item.Price }} рублей</p>
      </div>
      <div class="right-block">
        <p class="item-name">{{ item.Name }}</p>
        <p class="item-category">{{ item.Category }}</p>
        <label for="list">Характеристики:</label>
        <ul class="list">
          <li class="list-item" v-for="characteristic in item.Characteristics">
            {{ characteristic }}
          </li>
        </ul>
      </div>
    </div>
    <p class="description">{{ item.Description }}</p>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
.router-link {
  color: black;
  background: #6221a7;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  width: fit-content;
  height: fit-content;
  margin-top: 42px;
  margin-left: 12px;
}

.item-price {
  margin-left: 12px;
  font-size: 21px;
}

.item {
  display: flex;
  gap: 20px;
  color: white;
  font-size: 18px;
  padding: 12px;
  margin-top: 42px;
  margin-left: 12px;
}

.left-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.item-price {
  font-size: 26px;
}

.item-image {
  border-radius: 16px;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-position: center;
}

.description {
  margin-left: 24px;
  color: white;
  font-size: 24px;
}
</style>
