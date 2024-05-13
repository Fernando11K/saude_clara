<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <AgendaPessoalComponent title="Agenda Pessoal" :agendas="agendamentos" />

      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import AgendaPessoalComponent from 'components/ListaAgendaComponent.vue';
import agendamentos from 'src/assets/agendamentos';


</script>
