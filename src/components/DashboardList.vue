<script setup>
const props = defineProps(['title'])
</script>

<template>
  <div class="container0">
    <div class="subtitle">{{ props.title }}</div>
    <slot></slot>
  </div>
</template>

<style scoped>
.container0 {
  margin-top: 40px;
}
.subtitle {
  font-weight: 700;
  font-size: medium;
  color: rgba(0, 0, 0, 0.6);
}
</style>
