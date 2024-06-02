<template>
    <p>Quantidade de agendamentos: {{ qtdAgendas }}</p>
    <q-list separator>
        <q-item v-for="agenda in agendamentos" :key="agenda.id" clickable v-ripple @click="exibirDetalhes(agenda.id)"
            class="q-pa-none q-py-md">
            <q-item-section>
                <q-item-label>{{ agenda.exame?.nome }}</q-item-label>
                <q-item-label caption>{{ agenda.local }}</q-item-label>
            </q-item-section>

            <q-item-section side top>
                <q-item-label caption class="q-py-sm">{{
                    agenda.data
                }}</q-item-label>
                <q-badge rounded color="blue-grey" :label="EnumStatusAgendamento[agenda.status]"
                    class="q-my-sm q-py-sm" />
            </q-item-section>

            <q-item-section avatar>
                <q-item-section avatar class="absolute-right">
                    <q-icon color="blue-grey-3" name="fa-solid fa-chevron-right" />
                </q-item-section>
            </q-item-section>
        </q-item>
    </q-list>
</template>
<script setup lang="ts">
import EnumStatusAgendamento from 'src/model/types/EnumStatusAgenda';
import { computed } from 'vue';

const props = defineProps(['agendamentos'])
const qtdAgendas = computed(() => props.agendamentos.length);

const emits = defineEmits(['datalhes'])
const exibirDetalhes = (idAgendamento: number) => {
    emits('datalhes', idAgendamento)

}
</script>