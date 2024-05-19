<template>
  <q-page class="bg-grey-2 q-pa-md">
    <q-card class="bg-white q-pa-md">
      <CardTituloComponent :titulo="'Agenda Pessoal'" />
      <AgendaPessoalCard title="Agenda Pessoal" />
    </q-card>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="fa-solid fa-plus" color="blue-9" @click="abrirModal" />
    </q-page-sticky>
    <ModalAgenda ref="modalAgendaRef" label="Formulário Agenda" />
  </q-page>
</template>

<script setup lang="ts">
import AgendaPessoalCard from 'components/AgendaPessoalCard.vue';
import ModalAgenda from 'src/components/agenda/ModalAgenda.vue';
import CardTituloComponent from 'src/components/common/CardTituloComponent.vue'
import { ref } from 'vue';
const modalAgendaRef = ref<typeof ModalAgenda | null>(null)
const abrirModal = () => {
  if (modalAgendaRef.value) {

    modalAgendaRef.value.atualiza()
  }
}


</script>
