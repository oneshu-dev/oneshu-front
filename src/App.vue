<script setup>
import { NLayout, NLayoutContent, NLayoutSider, NMessageProvider } from 'naive-ui'
import AppSider from './components/AppSider.vue'
import AppContentFrame from './components/AppContentFrame.vue'
</script>

<template>
  <NLayout class="container" has-sider>
    <NLayoutSider class="sidebar" bordered>
      <NMessageProvider>
        <AppSider id="inner"></AppSider>
      </NMessageProvider>
    </NLayoutSider>
    <NLayoutContent class="main">
      <div id="inner2">
        <AppContentFrame />
      </div>
    </NLayoutContent>
  </NLayout>
</template>

<style scoped>
#inner {
  min-height: 100vh;
}
#inner2 {
  /* margin: 20px; */
  min-height: 100vh;
  background-color: rgba(0, 128, 0, 0.12);
  border-radius: 4px;
  padding: 20px;
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
./components/AppContentFrame.vue
