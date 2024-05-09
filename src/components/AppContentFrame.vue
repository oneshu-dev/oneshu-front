<script setup>
import { ref } from 'vue'
import { NDataTable, NButton, NIcon, NSpace } from 'naive-ui'
import { Plus, Search, Message, Dots } from '@vicons/tabler'
let counter = 0

const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Description',
    key: 'description'
  },
  {
    title: 'Assign to',
    key: 'assign_to'
  },
  {
    title: 'Created date',
    key: 'created_date'
  }
]

const data = ref([])

for (let i = 0; i < 20; i++) {
  addElement()
}

function addElement() {
  data.value.push({
    name: 'placeholder',
    description: `Placeholder ${counter++}`,
    assign_to: '114514',
    created_date: '114514'
  })
}
</script>

<template>
  <div class="container1">
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
    <div class="content">
      <NDataTable :columns="columns" :data="data" :pagination="false" />
    </div>
  </div>
</template>

<style scoped>
.container1 {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: rgba(0, 128, 0, 0.12);
  padding: 20px;
}
.header-item {
  height: 100%;
  width: 300px;
}
.header {
  flex: 0 0 auto;
  height: 80px;
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
  font-weight: 600;
  font-size: xx-large;
  margin: auto 0;
}
.content {
  flex: 1;
  overflow-y: auto;
}

th div {
  font-weight: 500;
}
</style>
