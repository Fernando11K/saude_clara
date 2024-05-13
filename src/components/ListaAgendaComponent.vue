<template>
  <q-page class="row justify-center">
    <div class="q-gutter-y-md col-12">
      <q-card style="height: 100%">
        <q-tabs v-model="tab" dense class="text-grey q-py-md" active-color="blue-9" indicator-color="primary"
          align="justify" narrow-indicator>
          <q-tab name="examesAgendados" label="Exames Agendados" />
          <q-tab name="meuHistorico" label="Meu Histórico" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="examesAgendados">
            <div class="q-my-sm">
              <q-input outlined v-model="modelValue" label="Buscar Agenda" class="q-my-md" @update:modelValue="filtro">
                <template v-slot:append>
                  <q-icon v-if="modelValue !== ''" name="close" @click="modelValue = ''" class="cursor-pointer" />
                </template>
                <template v-slot:prepend>
                  <q-icon name="search" />
                </template>
              </q-input>

              <p>Quantidade de agendamentos: {{ qtdAgendas }}</p>

              <q-list separator>
                <q-item v-for="agenda in agendasFiltradas" :key="agenda.id" clickable v-ripple
                  @click="detalhesAgenda(agenda.id)" class="q-pa-none q-py-md">
                  <q-item-section>
                    <q-item-label>{{ agenda.exame.nome }}</q-item-label>
                    <q-item-label caption>{{ agenda.local }}</q-item-label>
                  </q-item-section>

                  <q-item-section side top class="">
                    <q-item-label caption class="q-py-sm">{{
                      agenda.dataAgendamento
                      }}</q-item-label>
                    <q-badge rounded color="primary" label="Agendado" class="q-my-sm q-py-sm" />
                  </q-item-section>

                  <q-item-section avatar>
                    <q-item-section avatar class="absolute-right">
                      <q-icon color="blue-grey-3" name="fa-solid fa-chevron-right" />
                    </q-item-section>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-tab-panel>

          <q-tab-panel name="meuHistorico">
            <div class="q-my-sm">
              <q-input outlined v-model="text" label="Buscar Agenda" class="q-my-md">
                <template v-slot:append>
                  <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
                  <q-icon name="search" />
                </template>
              </q-input>

              <p>Quantidade de agendamentos: {{ qtdAgendas }}</p>

              <q-list separator>
                <q-item v-for="agenda in agendas" :key="agenda.id" clickable v-ripple @click="detalhesAgenda(agenda)"
                  class="q-pa-none q-py-md">
                  <q-item-section>
                    <q-item-label>{{ agenda.exame.nome }}</q-item-label>
                    <q-item-label caption>{{ agenda.local }}</q-item-label>
                  </q-item-section>

                  <q-item-section side top class="">
                    <q-item-label caption class="q-py-sm">{{
                      agenda.dataAgendamento
                      }}</q-item-label>
                    <q-badge rounded color="blue-grey" label="Realizado" class="q-my-sm q-py-sm" />
                  </q-item-section>

                  <q-item-section avatar>
                    <q-item-section avatar class="absolute-right">
                      <q-icon color="blue-grey-3" name="fa-solid fa-chevron-right" />
                    </q-item-section>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="fa-solid fa-plus" color="blue-9" @click="novaAgenda()" />
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref, defineProps } from 'vue';
import { Agenda } from './models';
import { useRouter } from 'vue-router';
import { LocalStorage } from 'quasar'
const modelValue = ref('')
const router = useRouter();
const props = defineProps(['agendas'])
const agendasFiltradas = ref(props.agendas)
const text = ref('')
const qtdAgendas = computed(() => props.agendas.length);
const tab = ref('examesAgendados');

const novaAgenda = () => {
  const novaAgendaVazia: Agenda = {
    id: 0,
    idExame: 0,
    local: '',
    dataAgendamento: '',
    notas: '',
    realizado: false,
    exame: {
      id: 0,
      imagem: '',
      nome: '',
      resumo: '',
      descricao: '',
      principio: '',
      aplicacoes: '',
      preparacao: '',
      tempo_de_execucao: '',
    },
  };

  const agendaqObj = JSON.stringify(novaAgendaVazia);
  LocalStorage.set('agendamento', agendaqObj)
  router.push({
    name: 'agendaForm',
    params: { agenda: agendaqObj },
  });
};

const detalhesAgenda = (idAgenda: number) => {

  router.push(`detalhesAgenda/${idAgenda}`);
}

const filtro = (valor: string | number | null) => {
  if (typeof valor === 'string') {

    agendasFiltradas.value = computed(() => (valor === '') ? props.agendas : props.agendas.filter((v: Agenda) => v.exame.nome.toLowerCase().indexOf(valor.toLowerCase()) > -1)).value;
  }
}
</script>
