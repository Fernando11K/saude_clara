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
          <q-select
            filled
            v-model="agenda.exame.exame"
            :options="options"
            label="Exame"
          />
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
//import { Agenda } from 'components/models';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const voltar = () => {
  router.push('/agendaPessoal');
};

const model = ref(null); // Referência para o valor selecionado
const options = [
  // Opções disponíveis no select
  'Exame 1',
  'Exame 2',
  'Exame 3',
  'Exame 4',
  'Exame 5',
];

//const minDate = new Date().toISOString().split('T')[0];
//const maxDate = '2030-12-31';

const submitForm = () => {
  // Aqui você pode adicionar a lógica para enviar os dados do formulário
  // Por exemplo:
  //console.log('Data do Agendamento:', dataAgendamento.value);
  //router.push('/'); // Redireciona para a página inicial após o envio do formulário
  console.log('Enviar formulário', model);
};
</script>

<script lang="ts">
export default {
  name: 'AgendaPessoal',
  mounted() {
    // O objeto 'agenda' está disponível diretamente como uma propriedade do componente
    console.log(this.agenda);
  },
  computed: {
    agenda() {
      // Retorna o objeto 'agenda' da rota
      return JSON.parse(this.$route.params.agenda.toString());
    },
  },
};
</script>
