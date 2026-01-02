<script setup lang="ts">
import { ref } from 'vue'

const showMobileMenu = ref(false)
</script>

<template>
  <header>
    <div class="container">
      <a href="/">
        <div class="logo"></div>
      </a>
      <ul class="desktopMenu">
        <li><a href="/about">Sobre Nós</a></li>
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
            <li>
              <a href="/about"><i class="pi pi-briefcase"></i> Sobre Nós</a>
            </li>
            <li>
              <a href="/procedures"><i class="pi pi-wave-pulse"></i> Procedimentos</a>
            </li>
            <li>
              <a href="/schedule"><i class="pi pi-calendar"></i> Agendamento</a>
            </li>
            <li>
              <a href="/schedule"><i class="pi pi-whatsapp"></i> Contato</a>
            </li>
          </ul>
        </label>
      </div>
    </div>
  </header>
</template>

<style lang="scss" src="./header.scss" scoped></style>
