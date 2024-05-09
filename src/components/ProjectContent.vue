<script setup>
import { NCard } from 'naive-ui'
</script>

<template>
  <div v-for="index in placeholders" :key="index">
    <NCard> Placeholder {{ index }} </NCard>
  </div>
</template>
