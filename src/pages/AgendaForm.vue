<template>
  <div class="row q-ma-md">
    <div class="col">
      <q-btn icon="fa-solid fa-chevron-left" color="primary" @click="voltar" />
    </div>
  </div>
  <q-page class="row justify-center q-ma-md">
    <div class="col-12 col-md-8">
      <div class="text-h4 text-bold">Formulário Agenda</div>
      <q-form @submit="submitForm">
        <div class="q-my-lg text-h5 text-bold">
          <q-select filled v-model="agenda.exame.exame" :options="options" label="Exame" />
        </div>
        <!-- <div class="q-my-lg text-h5 text-bold">
        <q-date
          v-model="agenda.dataAgendamento"
          label="Data do Agendamento"
          mask="YYYY/MM/DD"
          :min="minDate"
          :max="maxDate"
          color="primary"
        />
      </div> -->
        <div class="q-my-lg text-h5 text-bold">
          <q-input v-model="agenda.local" filled />
        </div>
        <div class="q-my-lg text-h5 text-bold">
          <q-input v-model="agenda.notas" filled type="textarea" />
        </div>

        <div class="q-my-lg text-h5 text-bold">
          <q-toggle v-model="agenda.realizado" label="Realizado?" />
        </div>

        <q-btn label="Salvar" type="submit" color="primary" />
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">

import { computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';


const router = useRouter();
const route = useRoute()
const voltar = () => { router.push('/agenda-pessoal'); };

const model = ref(null);
const options = ['Exame 1', 'Exame 2', 'Exame 3', 'Exame 4', 'Exame 5',];


const submitForm = () => {

  console.log('Enviar formulário', model);
};
const agenda = computed(() => JSON.parse(route.params.agenda.toString()))
</script>
