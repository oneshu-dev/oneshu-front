<script setup>
import { h, ref } from 'vue'
import { NButton, NMenu, NEllipsis, NIcon, NPopselect, NAvatar } from 'naive-ui'
import { Dashboard, File, Message, Calendar, Robot, DotsVertical } from '@vicons/tabler'

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
    label: 'Dashboard',
    key: 'dashboard',
    icon: renderIcon(Dashboard)
  },
  {
    label: 'Calendar',
    key: 'calendar',
    icon: renderIcon(Calendar)
  },
  {
    label: 'Message',
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
    <div class="about-me">
      <NPopselect trigger="click">
        <NButton id="me">
          <div
            style="display: flex; justify-content: space-between; align-items: center; width: 200px"
          >
            <div
              style="
                display: inline-flex;
                flex-direction: row;
                justify-content: start;
                align-items: center;
              "
            >
              <NAvatar round class="item" style="display: inline-block">
                <NIcon>
                  <Robot />
                </NIcon>
              </NAvatar>
              <div class="item">cnachen</div>
            </div>
            <NIcon size="20">
              <DotsVertical />
            </NIcon>
          </div>
        </NButton>
      </NPopselect>
    </div>
    <div class="menu">
      <NMenu :options="options" default-value="dashboard" />
    </div>

    <div class="button" style="text-align: center">
      <NButton id="bx" @click="addElement">Add</NButton>
    </div>
  </div>
</template>
<style>
.container {
  display: flex;
  flex-direction: column;
}
.about-me {
  flex: 0 0 auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
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
#me {
  margin: 20px;
  height: 60px;
  width: auto;
}
.item {
  margin: 8px;
  font-weight: bold;
  font-size: large;
}
</style>
