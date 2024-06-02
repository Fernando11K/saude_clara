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
          <InputBusca v-model="modelValue" label="Buscar Agenda" @update:modelValue="filtro" :disable="loading" />
          <ListAgendamentos :agendamentos="agendasFiltradas" @datalhes="detalhesAgenda" />
        </q-tab-panel>
        <q-tab-panel name="meuHistorico">
          <InputBusca v-model="text" label="Buscar Agenda" @update:modelValue="filtro" :disable="loading" />
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
import { Agenda } from 'src/model/interfaces/Agenda';
import { buscarAgendamentoPorUId, loading } from 'src/service/AgendamentoService';
import { buscarExamePorId } from 'src/service/ExameService';
const modelValue = ref('')
const router = useRouter();
const text = ref('')
const tab = ref('examesAgendados');
const listAgendamentos = ref([])
const buscarAgenda = async () => {
  listAgendamentos.value = []
  await buscarAgendamentoPorUId()
    .then((response) => {
      response.map(agendamento => {
        return buscarExamePorId(agendamento.idExame)
          .then((exame) => {

            listAgendamentos.value.push({ ...agendamento, exame })
          })
      }
      )
    })
}

buscarAgenda()
const agendasFiltradas = ref(listAgendamentos.value)

const detalhesAgenda = (idAgenda: number) => {

  router.push(`detalhes-agenda/${idAgenda}`);
}

const filtro = (valor: string | number | null) => {
  if (typeof valor === 'string') {

    agendasFiltradas.value = computed(() => (valor === '') ? listAgendamentos.value : listAgendamentos.value.filter((v: Agenda) => v.exame.nome.toLowerCase().indexOf(valor.toLowerCase()) > -1)).value;
  }
}

</script>
