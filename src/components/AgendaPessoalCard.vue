<template>
  <section class="row justify-center ">

    <q-card class="col-12 q-ma-md">
      <q-tabs v-model="tab" dense class="text-grey q-py-md" active-color="blue-9" indicator-color="primary"
        align="justify" narrow-indicator>
        <q-tab name="examesAgendados" label="Exames Agendados" />
        <q-tab name="meuHistorico" label="Meu Histórico" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="examesAgendados">
          <div class="q-my-sm">
            <InputBusca v-model="modelValue" label="Buscar Agenda" @update:modelValue="filtro" />
            <p>Quantidade de agendamentos: {{ qtdAgendas }}</p>
            <ListAgendamentos :agendamentos="agendasFiltradas" label="Agendado" @datalhes="detalhesAgenda" />
          </div>
        </q-tab-panel>

        <q-tab-panel name="meuHistorico">
          <div class="q-my-sm">
            <InputBusca v-model="text" label="Buscar Agenda" @update:modelValue="filtro" />
            <p>Quantidade de agendamentos: {{ qtdAgendas }}</p>

            <ListAgendamentos :agendamentos="agendasFiltradas" label="Realizado" @datalhes="detalhesAgenda" />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </section>
</template>

<script setup lang="ts">
import InputBusca from './common/InputBusca.vue';
import ListAgendamentos from 'src/components/agenda/ListAgendamentos.vue'
import { computed, ref } from 'vue';
import { Agenda } from './models';
import { useRouter } from 'vue-router';
import agendamentos from 'src/assets/agendamentos';
const modelValue = ref('')
const router = useRouter();
const agendasFiltradas = ref(agendamentos)
const text = ref('')
const qtdAgendas = computed(() => agendamentos.length);
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
