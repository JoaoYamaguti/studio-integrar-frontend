<script setup lang="ts">
import { whatsappLink } from '@/Resources/WhatsappLink'
</script>

<template>
  <div class="whatsappButton">
    <a :href="whatsappLink">
      <i class="pi pi-whatsapp"></i>
    </a>
  </div>
</template>

<style lang="scss" src="./whatsappButton.scss"></style>
