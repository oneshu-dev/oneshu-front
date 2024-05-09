<script setup>
import { h, ref } from 'vue'
import { NButton, NMenu, NEllipsis, NIcon } from 'naive-ui'
import { User, Dashboard, File, Message, Calendar } from '@vicons/tabler'
import { RouterLink } from 'vue-router'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

function addElement() {
  const name = generateRandomString(10)
  findByKey(options.value, 'projects')?.children.push({
    label: () => h(NEllipsis, null, { default: () => name }),
    key: counter++
  })
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let randomString = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomString += characters.charAt(randomIndex)
  }
  return randomString
}

function findByKey(items, value) {
  for (const item of items) {
    if (item['key'] == value) return item
  }
}

let options = ref([
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/login'
        },
        'User'
      ),
    key: 'user',
    icon: renderIcon(User)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/dashboard'
        },
        'Dashboard'
      ),
    key: 'dashboard',
    icon: renderIcon(Dashboard)
  },
  {
    label: 'Calendar',
    key: 'calendar',
    icon: renderIcon(Calendar)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/message'
        },
        'Message'
      ),
    key: 'message',
    icon: renderIcon(Message)
  },
  {
    label: 'File',
    key: 'file',
    icon: renderIcon(File)
  },
  {
    type: 'group',
    label: 'Projects',
    key: 'projects',
    children: []
  },
  {
    type: 'group',
    label: 'Other',
    key: 'other',
    children: []
  }
])
let counter = 0

for (let i = 0; i < 5; i++) {
  addElement()
}
</script>

<template>
  <div class="container">
    <div class="menu">
      <NMenu :options="options" default-value="dashboard" />
    </div>

    <div class="button" style="text-align: center">
      <NButton id="bx" @click="addElement">Add</NButton>
    </div>
  </div>
</template>
<style scoped>
#bx {
  margin: auto;
  width: 210px;
}
.container {
  display: flex;
  flex-direction: column;
}
.menu {
  flex: 1;
  overflow-y: auto;
}
.button {
  flex: 0 0 auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
