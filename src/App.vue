<script setup lang="ts">
import { RouterView } from 'vue-router'
import WhatsappButton from './components/WhatsappButton/WhatsappButton.vue'
import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <WhatsappButton />
</template>

<style lang="scss" src="./assets/main.scss" scoped></style>
