<script setup>
import {
  NLayout,
  NLayoutContent,
  NLayoutSider,
  NMessageProvider,
  NList,
  NListItem,
  NTag,
  NSpace,
  NThing
} from 'naive-ui'
import AppSider from './AppSider.vue'
import DashboardCard from './DashboardCard.vue'
import DashboardList from './DashboardList.vue'
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
          <div class="title">Welcome, user!</div>
          <div class="prompt">The following is your current task statistics</div>
          <div class="box">
            <div class="box-item">
              <DashboardCard style="background-color: rgba(0, 0, 128, 0.4)">
                <div class="prompt">Today's mission</div>
                <div class="title">1</div>
              </DashboardCard>
            </div>
            <div class="box-item">
              <DashboardCard style="background-color: rgba(128, 0, 0, 0.4)">
                <div class="prompt">Overdue task</div>
                <div class="title">3</div>
              </DashboardCard>
            </div>
            <div class="box-item">
              <DashboardCard style="background-color: rgba(0, 128, 0, 0.4)">
                <div class="prompt">To be done</div>
                <div class="title">4</div>
              </DashboardCard>
            </div>
          </div>
          <div>
            <DashboardList title="Today's mission">
              <n-list hoverable clickable bordered>
                <n-list-item>
                  <n-thing title="专题文献查找" content-style="margin-top: 10px;">
                    <template #description>
                      <n-space size="small" style="margin-top: 4px">
                        <n-tag :bordered="false" type="info" size="small"> 待处理</n-tag>
                        <n-tag :bordered="false" type="success" size="small"> 不紧急 </n-tag>
                      </n-space>
                    </template>
                    完成你伟大的人生
                  </n-thing>
                </n-list-item>
              </n-list>
            </DashboardList>
            <DashboardList title="Overdue task">
              <n-list hoverable clickable bordered>
                <n-list-item>
                  <n-thing
                    title="软件需求规格说明书 CHAP5 软件原型"
                    content-style="margin-top: 10px;"
                  >
                    <template #description>
                      <n-space size="small" style="margin-top: 4px">
                        <n-tag :bordered="false" type="info" size="small"> 待处理 </n-tag>
                        <n-tag :bordered="false" type="error" size="small"> 紧急 </n-tag>
                      </n-space>
                    </template>
                    最新的打印机<br />
                  </n-thing>
                </n-list-item>
                <n-list-item>
                  <n-thing title="API设计" content-style="margin-top: 10px;">
                    <template #description>
                      <n-space size="small" style="margin-top: 4px">
                        <n-tag :bordered="false" type="info" size="small"> 待处理 </n-tag>
                        <n-tag :bordered="false" type="error" size="small"> 紧急 </n-tag>
                      </n-space>
                    </template>
                    包含USER PROJECT MILESTONE TASK等对象的数据库设计和对应api给出
                  </n-thing>
                </n-list-item>
              </n-list>
            </DashboardList>
            <DashboardList title="To be done"> </DashboardList>
          </div>
        </div>
      </div>
    </NLayoutContent>
  </NLayout>
</template>

<style scoped>
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
  width: 646px;
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
