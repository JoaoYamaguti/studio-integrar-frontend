<script setup lang="ts">
import { RouterView } from 'vue-router'
import WhatsappButton from './components/WhatsappButton.vue'
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
  <WhatsappButton />
</template>

<style src="./assets/main.css" scoped></style>
