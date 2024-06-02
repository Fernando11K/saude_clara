<template>
  <div class="row q-ma-md">
    <div class="col">
      <q-btn icon="fa-solid fa-chevron-left" color="primary" @click="voltar" padding="md" rounded />
    </div>
  </div>
  <q-page class="row justify-center q-ma-md" v-if="agenda">
    <div class="col-12 col-md-8">
      <div class="q-my-lg text-h5 text-bold text-uppercase">
        {{ agenda.exame.nome }}
      </div>
      <div class="q-my-md">
        <q-badge rounded :color="getBadgeColor(EnumStatusAgendamento[agenda.status])"
          :label="EnumStatusAgendamento[agenda.status]" class="q-py-sm" />
      </div>

      <div class="text-h6 text-bold">Local:</div>
      <p>{{ agenda.local }}</p>
      <div class="text-h6 text-bold">Data Agendada:</div>
      <p>{{ agenda.data }}</p>
      <div class="text-h6 text-bold">Notas:</div>
      <p>{{ agenda.observacao }}</p>
    </div>
    <ModalAgenda :agendamento="agenda" ref="modalAgendaRef" label="Formulário Agenda"
      @atualiza="buscaAgendamentoPorId" />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab vertical-actions-align="right" icon="fa-solid fa-ellipsis" color="blue-9" direction="up">
        <q-fab-action color="black" @click="excluir" icon="fa-solid fa-trash-can" label="Excluir Agendamento"
          class="q-px-lg" />
        <q-fab-action color="negative" @click="cancelarAgendamento(agenda)" icon="fa-solid fa-ban"
          label="Cancelar Agendamento" class="q-px-md" />
        <q-fab-action color="primary" @click="editarAgenda()" icon="fa-solid fa-pencil" label="Editar Agendamento"
          class="q-px-lg" />
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import ModalAgenda from 'src/components/agenda/ModalAgenda.vue';
import { Agenda } from 'src/model/interfaces/Agenda';
import { positive } from 'src/utils/alerta';
import { atualizarAgendamento, buscarAgendamentoPorId } from 'src/service/AgendamentoService';
import EnumStatusAgendamento from 'src/model/types/EnumStatusAgenda';
const props = defineProps(['idAgenda'])
const agenda = ref()

onMounted(async () => {

  await buscaAgendamentoPorId()

})
const buscaAgendamentoPorId = async () => {

  await buscarAgendamentoPorId(props.idAgenda)
    .then((response) => {
      agenda.value = response
    })

}
const router = useRouter();
const excluir = () => {
  positive(`Agendamento de ${agenda.value.exame.nome} excluído de sua agenda!`)
  voltar()
}
const voltar = () => {
  router.push('/agenda-pessoal');
};

const editarAgenda = () => {
  abrirModal();
}
const modalAgendaRef = ref<typeof ModalAgenda | null>(null)

const abrirModal = () => {
  if (modalAgendaRef.value) {

    modalAgendaRef.value.atualiza()
  }
}
const cancelarAgendamento = async (agenda: Agenda) => {
  await atualizarAgendamento(agenda)
  buscaAgendamentoPorId()
}
const getBadgeColor = (status: string) => {
  switch (status) {
    case 'Pendente':
      return 'primary';
    case 'Confirmado':
      return 'success';
    case 'Cancelado':
      return 'red-8';
    case 'Concluído':
      return 'grey';
    case 'Reagendado':
      return 'warning';
    default:
      return '';
  }
}


</script>
