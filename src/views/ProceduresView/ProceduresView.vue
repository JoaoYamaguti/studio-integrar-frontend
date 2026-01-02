<script setup lang="ts">
const procedures = [
  {
    title: 'Consultoria de Imagem Pessoal',
    description: 'Análise de estilo, coloração pessoal e guarda-roupa para aprimorar sua imagem.',
    duration: '2 horas',
    price: 'R$ 300,00',
  },
  {
    title: 'Personal Shopper',
    description:
      'Acompanhamento em compras para selecionar peças que valorizem seu estilo e necessidades.',
    duration: '3 horas',
    price: 'R$ 450,00',
  },
  {
    title: 'Análise de Coloração Pessoal',
    description: 'Identificação das cores que mais harmonizam com seu tom de pele, cabelo e olhos.',
    duration: '1 hora',
    price: 'R$ 200,00',
  },
]
</script>

<template>
  <main class="procedures">
    <h1>Procedimentos</h1>
    <ul class="proceduresList">
      <li v-for="procedure in procedures" :key="procedure.title" class="procedureCard">
        <section>
          <div class="procedureInfo">
            <h2>{{ procedure.title }}</h2>
            <p>{{ procedure.description }}</p>
            <p><strong>Duração:</strong> {{ procedure.duration }}</p>
            <p><strong>Preço:</strong> {{ procedure.price }}</p>
          </div>
          <div class="procedureImg"></div>
        </section>
      </li>
    </ul>
  </main>
</template>

<style lang="scss" src="./procedures.scss"></style>
