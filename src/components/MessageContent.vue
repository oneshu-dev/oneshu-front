<script setup>
import { NLayout, NLayoutContent, NLayoutSider, NMessageProvider, NAvatar, NCard } from 'naive-ui'
import AppSider from './AppSider.vue'
</script>

<template>
  <NLayout class="container" has-sider>
    <NLayoutSider class="sidebar" bordered>
      <NMessageProvider>
        <AppSider id="inner"></AppSider>
      </NMessageProvider>
    </NLayoutSider>
    <NLayoutContent class="main">
      <div class="dashboard-container">
        <div class="dashboard-container-inner">
          <div class="title">Message</div>
          <div class="message-box">
            <NCard>
              <div class="message-header">
                <n-avatar round> S </n-avatar>
                <div>snail</div>
              </div>
            </NCard>
            <NCard> fs</NCard>
            <div></div>
          </div>
        </div>
      </div>
    </NLayoutContent>
  </NLayout>
</template>

<style scoped>
.message-header {
  height: 40%;
  width: 100%;
  display: flex;
  align-items: center;
}
.message-box {
  width: 100%;
  height: 600px;
}
.box-item .title {
  font-size: x-large;
  color: rgba(255, 255, 255, 1);
}
.box-item .prompt {
  color: rgba(255, 255, 255, 0.5);
}
.box-item {
  border-radius: 10px;
}
.box {
  display: flex;
  height: 120px;
  justify-content: space-between;
  align-items: center;
}
.dashboard-container {
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.02);
}
.dashboard-container-inner {
  margin: auto;
  height: 90vh;
  width: 888px;
}
#inner {
  min-height: 100vh;
}
.prompt {
  color: gray;
  padding-top: 10px;
  padding-bottom: 10px;
}
.title {
  position: relative;
  font-weight: 600;
  font-size: xx-large;
  margin: auto 0;
}
.sidebar {
  position: relative;
  height: 100%;
}
.main {
  overflow-y: scroll;
}
.container {
  height: 100vh;
}
</style>
