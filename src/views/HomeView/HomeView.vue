<script setup lang="ts"></script>

<template>
  <main class="home">
    <div class="banner">
      <div class="intro">
        <h1>Bem-Vindo(a) ao Studio Integrar</h1>
        <p>
          Um espaço idealizado pela Enfermeira Andreia Yamaguti, onde ciência, sensibilidade e
          sabedoria integrativa se encontram. Aqui, cada cuidado é conduzido com uma visão
          humanizada e profunda, unindo conhecimento técnico em saúde às práticas terapêuticas
          integrativas e energéticas. Nossas sessões são pensadas para acolher você de forma
          completa — corpo, mente e energia — respeitando seu ritmo, sua história e sua essência. Em
          um ambiente cuidadosamente preparado, com intenção terapêutica e estímulos sensoriais,
          convidamos você a vivenciar uma experiência única de equilíbrio, bem-estar e reconexão
          consigo mesmo(a).
        </p>
      </div>
    </div>
    <div class="operation">
      <div class="infos">
        <h2>Horarios de Atendimento</h2>
        <p>
          Nosso studio funciona de segunda a sexta-feira, das 19h às 23h. Agendamentos são feitos
          com antecedência, garantindo um atendimento personalizado e dedicado a cada cliente.
        </p>
      </div>
      <div class="buttons">
        <RouterLink to="/procedures">Procedimentos</RouterLink>
        <RouterLink to="/schedule">Agendamento</RouterLink>
      </div>
    </div>
    <div class="location">
      <div class="infos">
        <h3>Endereço</h3>
        <p>R. Fioravante Lopes Garcia, 544 - Jardim Belem, São Paulo - SP, 03811-000, Brasil</p>
        <h3>Telefone</h3>
        <p>(11) 98239-5870</p>
      </div>
      <!-- <div class="maps">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aspernatur dolor
        laboriosam maiores beatae fugit molestias. Aliquid, repellendus tempora cum commodi
        molestias excepturi doloremque animi facere, accusamus quaerat, vero perspiciatis?
      </div> -->
    </div>
  </main>
</template>

<style lang="scss" src="./home.scss"></style>
