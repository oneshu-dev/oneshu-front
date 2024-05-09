<script setup>
import { NLayout, NLayoutContent, NLayoutSider, NMessageProvider } from 'naive-ui'
import AppSider from '../components/AppSider.vue'
import AppContentFrame from '../components/AppContentFrame.vue'
</script>

<template>
  <NLayout class="container" has-sider>
    <NLayoutSider class="sidebar" bordered>
      <NMessageProvider>
        <AppSider id="inner"></AppSider>
      </NMessageProvider>
    </NLayoutSider>
    <NLayoutContent class="main">
      <AppContentFrame />
    </NLayoutContent>
  </NLayout>
</template>

<style scoped>
#inner {
  min-height: 100vh;
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
