<script setup lang="ts">
import { procedure } from '@/Resources/Procedures'

const categories = procedure.categories
</script>

<template>
  <main class="procedures">
    <div class="description">
      <h1>Terapias</h1>
      <p>
        No Studio Integrar, você vivencia um cuidado individualizado, onde diversas técnicas se
        complementam para potencializar resultados.
      </p>
      <p>
        <strong>Imagine uma sessão completa…</strong>
      </p>

      <p>
        Uma experiência terapêutica preparada para aliviar sua dor de verdade, tratar a causa e
        restaurar o equilíbrio do seu corpo.
      </p>
    </div>
    <ul class="categoriesList">
      <li v-for="(categorie, index) in categories" :key="index" class="categorieCard">
        <section>
          <div class="categorieInfo">
            <h2>{{ categorie.name }}</h2>
            <p>{{ categorie.description }}</p>
            <div v-if="categorie.procedures">
              <h3>Procedimentos</h3>
              <ul class="procedureList">
                <li
                  v-for="(procedure, index) in categorie.procedures"
                  :key="index"
                  class="procedure"
                >
                  <h4>{{ procedure.name }}</h4>
                  <p>{{ procedure.description }}</p>
                  <div v-if="procedure.benefits" class="benefitsList">
                    <h4>Benefícios</h4>
                    <ul>
                      <li v-for="(benefit, index) in procedure.benefits" :key="index">
                        <p>{{ benefit }}</p>
                      </li>
                    </ul>
                  </div>
                  <!-- <div v-if="procedure.indications" class="indications">
                    <h4>Indicações</h4>
                    <ul>
                      <li v-for="(indication, index) in procedure.indications" :key="index">
                        <p>{{ indication }}</p>
                      </li>
                    </ul>
                  </div> -->
                </li>
              </ul>
            </div>
            <div v-if="categorie.benefits" class="benefitsList">
              <h4>Benefícios</h4>
              <ul>
                <li v-for="(benefit, index) in categorie.benefits" :key="index">
                  <p>{{ benefit }}</p>
                </li>
              </ul>
            </div>
            <div v-if="categorie.indications" class="indicationsList">
              <h4>Indicações</h4>
              <ul>
                <li v-for="(indication, index) in categorie.indications" :key="index">
                  <p>{{ indication }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="categorieImg"></div>
        </section>
      </li>
    </ul>
  </main>
</template>

<style lang="scss" src="./procedures.scss"></style>
