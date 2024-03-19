<script setup>
import { ref } from 'vue'
import { NButton, NCard, NIcon, NSpace } from 'naive-ui'
import { Plus, Search, Message, Dots } from '@vicons/tabler'
let placeholders = ref([])

let counter = 0

for (let i = 0; i < 9; i++) {
  placeholders.value.push(counter++)
}

function addElement() {
  placeholders.value.push(counter++)
}
</script>

<template>
  <NSpace class="header" justify="space-between">
    <div class="header-item">
      <div class="header-item-left">
        <div class="title">Oneshu</div>
      </div>
    </div>
    <div class="header-item">
      <div class="header-item-right">
        <NButton @click="addElement" strong secondary circle>
          <template #icon>
            <NIcon><Plus /> </NIcon>
          </template>
        </NButton>
        <NButton strong secondary circle>
          <template #icon>
            <NIcon><Search /> </NIcon>
          </template>
        </NButton>
        <NButton strong secondary circle>
          <template #icon>
            <NIcon><Message /> </NIcon>
          </template>
        </NButton>
        <NButton strong secondary circle>
          <template #icon>
            <NIcon><Dots /> </NIcon>
          </template>
        </NButton>
      </div>
    </div>
  </NSpace>
  <div v-for="index in placeholders" :key="index">
    <NCard> Placeholder {{ index }} </NCard>
  </div>
</template>

<style>
.header-item {
  height: 100%;
  width: 300px;
}
.header {
  height: 100px;
  /* background-color: antiquewhite; */
}
.header-item-right {
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
}
.header-item-right > * {
  margin-left: 16px;
}
.header-item-left {
  display: flex;
  align-items: center;
  height: 100%;
}
.title {
  position: relative;
  font-weight: bold;
  font-size: xx-large;
  margin: auto 0;
}
</style>
