<script setup>
import LoginCard from '../components/LoginCard.vue'
</script>

<template>
  <div class="container-login">
    <LoginCard></LoginCard>
  </div>
</template>

<style scoped>
.container-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 128, 0.12);
}
</style>
