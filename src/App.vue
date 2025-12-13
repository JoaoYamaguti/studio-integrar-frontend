<script setup lang="ts">
import { RouterView } from 'vue-router'
import WhatsappButton from './components/WhatsappButton.vue'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <div class="container">
    <HeaderComponent />
    <RouterView />
  </div>
  <WhatsappButton />
</template>

<style src="./assets/main.css" scoped></style>
