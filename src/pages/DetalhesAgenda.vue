<template>
  <div class="row q-ma-md">
    <div class="col">
      <q-btn icon="fa-solid fa-chevron-left" color="primary" @click="voltar" />
    </div>
  </div>
  <q-page class="row justify-center q-ma-md" v-if="agenda">
    <div class="col-12 col-md-8">
      <div class="q-my-lg text-h5 text-bold text-uppercase">
        {{ agenda.exame.nome }}
      </div>
      <div class="q-my-md">
        <q-badge rounded color="primary" label="Agendado" class="q-py-sm" />
      </div>

      <div class="text-h6 text-bold">Local:</div>
      <p>{{ agenda.local }}</p>
      <div class="text-h6 text-bold">Data Agendada:</div>
      <p>{{ agenda.dataAgendamento }}</p>
      <div class="text-h6 text-bold">Notas:</div>
      <p>{{ agenda.notas }}</p>
    </div>
    <ModalAgenda ref="modalAgendaRef" label="Formulário Agenda" />

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab vertical-actions-align="right" icon="fa-solid fa-ellipsis" color="blue-9" direction="up">
        <q-fab-action color="negative" @click="console.log('excluie')" icon="fa-solid fa-trash-can"
          label="Excluir Agendamento" />
        <q-fab-action color="primary" @click="editarAgenda(agenda)" icon="fa-solid fa-pencil"
          label="Editar Agendamento" />
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">
import { Agenda } from 'components/models';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import agendamentos from 'src/assets/agendamentos';
import ModalAgenda from 'src/components/agenda/ModalAgenda.vue';
const props = defineProps(['idAgenda'])
const agenda = ref(agendamentos.find((agenda: Agenda) => agenda.id == props.idAgenda))
const router = useRouter();

const voltar = () => {
  router.push('/agenda-pessoal');
};

const editarAgenda = (agenda: Agenda) => {
  abrirModal();
}
const modalAgendaRef = ref<typeof ModalAgenda | null>(null)

const abrirModal = () => {
  if (modalAgendaRef.value) {

    modalAgendaRef.value.atualiza()
  }
}


</script>
