<script setup lang="ts">
import { ref } from 'vue'

const showMobileMenu = ref(false)
</script>

<template>
  <header>
    <a href="/">
      <div class="logo"></div>
    </a>
    <ul class="desktopMenu">
      <li><a href="/procedures">Procedimentos</a></li>
      <li><a href="/schedule">Agendamento</a></li>
    </ul>
    <div class="mobileMenuIcon">
      <label for="mobileMenuIcon">
        <input v-model="showMobileMenu" type="checkbox" name="mobileMenu" id="mobileMenuIcon" />
        <div class="firstBar"></div>
        <div class="secondBar"></div>
        <div class="thirdBar"></div>
        <ul class="mobileMenu container">
          <li><a href="/procedures">Procedimentos</a></li>
          <li><a href="/schedule">Agendamento</a></li>
        </ul>
      </label>
    </div>
  </header>
</template>

<style src="../assets/header.css" scoped></style>
