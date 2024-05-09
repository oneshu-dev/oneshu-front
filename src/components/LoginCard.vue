<script setup>
import { NCard, NInput, NIcon, NButton } from 'naive-ui'
import { Mail, Lock } from '@vicons/tabler'
</script>

<template>
  <NCard class="card"
    ><div class="card-inner">
      <div id="prompt-title">Welcome to Oneshu</div>
      <NInput>
        <template #prefix>
          <NIcon :component="Mail"> </NIcon>
        </template>
      </NInput>
      <NInput>
        <template #prefix> <NIcon :component="Lock"> </NIcon> </template
      ></NInput>
      <NButton type="primary">Login</NButton>
      <div id="prompt-register">No account yet? <a href="localhost">Register Account</a></div>
    </div>
  </NCard>
</template>

<style scoped>
#prompt-title {
  text-align: center;
  font-weight: bold;
  font-size: x-large;
  color: rgb(100, 100, 100);
}
#prompt-register {
  color: gray;
}
.card-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.card {
  width: 420px;
  height: 320px;
}
</style>
