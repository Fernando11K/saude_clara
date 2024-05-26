<template>
  <section class="row justify-center ">

    <q-card class="col-12 q-ma-md">
      <q-tabs v-model="tab" dense class="text-grey q-py-md" active-color="blue-9" indicator-color="primary"
        align="justify" narrow-indicator>
        <q-tab name="examesAgendados" label="Exames Agendados" />
        <q-tab name="meuHistorico" label="Meu Histórico" />
      </q-tabs>

      <q-separator />
      <q-tab-panels v-model="tab" animated swipeable>
        <q-tab-panel name="examesAgendados">
          <InputBusca v-model="modelValue" label="Buscar Agenda" @update:modelValue="filtro" />
          <ListAgendamentos :agendamentos="agendasFiltradas" label="Agendado" @datalhes="detalhesAgenda" />
        </q-tab-panel>
        <q-tab-panel name="meuHistorico">
          <InputBusca v-model="text" label="Buscar Agenda" @update:modelValue="filtro" />
          <ListAgendamentos :agendamentos="agendasFiltradas" label="Realizado" @datalhes="detalhesAgenda" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </section>
</template>

<script setup lang="ts">
import InputBusca from './common/InputBusca.vue';
import ListAgendamentos from 'src/components/agenda/ListAgendamentos.vue'
import { computed, ref } from 'vue';

import { useRouter } from 'vue-router';
import agendamentos from 'src/assets/agendamentos';
import { Agenda } from 'src/model/interfaces/Agenda';
const modelValue = ref('')
const router = useRouter();
const agendasFiltradas = ref(agendamentos)
const text = ref('')
const tab = ref('examesAgendados');

const detalhesAgenda = (idAgenda: number) => {

  router.push(`detalhes-agenda/${idAgenda}`);
}

const filtro = (valor: string | number | null) => {
  if (typeof valor === 'string') {

    agendasFiltradas.value = computed(() => (valor === '') ? agendamentos : agendamentos.filter((v: Agenda) => v.exame.nome.toLowerCase().indexOf(valor.toLowerCase()) > -1)).value;
  }
}
</script>
