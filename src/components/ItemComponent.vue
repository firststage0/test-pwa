<script setup lang="ts">
type Item = {
  Name: string
  Category: string
  Characteristics: string[]
  Price: number
  ImageUrl: string
}
const props = defineProps<{
  item: Item
}>()

const imgDiv = {
  backgroundImage: `url(src/images/${props.item.ImageUrl})`,
}
</script>
<template>
  <div class="item-wrapper">
    <div class="left-block">
      <div class="item-image" :style="imgDiv"></div>
      <p class="item-price">Цена: {{ props.item.Price }} рублей</p>
    </div>
    <div class="right-block">
      <p class="item-name">{{ props.item.Name }}</p>
      <p class="item-category">{{ props.item.Category }}</p>
      <label for="list">Характеристики:</label>
      <ul class="list">
        <li
          class="list-item"
          v-for="characteristic in props.item.Characteristics"
        >
          {{ characteristic }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.item-wrapper {
  padding: 12px;
  background: #dcdcdc;
  border-radius: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 18px;
  color: black;
  font-family: InterFont;
  font-size: 16px;
}

.left-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
}

.item-price {
  margin-left: 12px;
  font-size: 21px;
}

.item-image {
  border-radius: 16px;
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: center;
}
</style>
