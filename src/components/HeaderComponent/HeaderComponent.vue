<script setup lang="ts">
import { ref } from 'vue'
import { whatsappLink } from '@/Resources/WhatsappLink.ts'

const showMobileMenu = ref(false)

const unshowMobileMenu = () => {
  showMobileMenu.value = false
}
</script>

<template>
  <header>
    <nav class="container">
      <RouterLink to="/" @click="unshowMobileMenu">
        <div class="logo"></div>
      </RouterLink>
      <ul class="desktopMenu">
        <li><RouterLink to="/about">Sobre Nós</RouterLink></li>
        <li><RouterLink to="/procedures">Procedimentos</RouterLink></li>
        <li><RouterLink to="/schedule">Agendamento</RouterLink></li>
      </ul>
      <div class="mobileMenuIcon">
        <label for="mobileMenuIcon">
          <input v-model="showMobileMenu" type="checkbox" name="mobileMenu" id="mobileMenuIcon" />
          <div class="firstBar"></div>
          <div class="secondBar"></div>
          <div class="thirdBar"></div>
          <ul class="mobileMenu container">
            <li>
              <RouterLink to="/about" @click="unshowMobileMenu"
                ><i class="pi pi-briefcase"></i> Sobre Nós</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/procedures" @click="unshowMobileMenu"
                ><i class="pi pi-wave-pulse"></i> Procedimentos</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/schedule" @click="unshowMobileMenu"
                ><i class="pi pi-calendar"></i> Agendamento</RouterLink
              >
            </li>
            <li>
              <a :href="whatsappLink"><i class="pi pi-whatsapp"></i> Contato</a>
            </li>
          </ul>
        </label>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" src="./header.scss" scoped></style>
