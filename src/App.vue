<script setup lang="ts">
import { RouterView } from 'vue-router'
import WhatsappButton from './components/WhatsappButton/WhatsappButton.vue'
import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <div class="container">
    <RouterView />
  </div>
  <WhatsappButton />
</template>

<style lang="scss" src="./assets/main.scss" scoped></style>
