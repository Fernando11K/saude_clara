<template>
    <q-select :modelValue="modelValue" @update:modelValue='atualiza' :options="opcoesExames" :label="label" use-input
        clearable :filled="q.platform.is.desktop" :outlined="q.platform.is.mobile" :rounded="q.platform.is.mobile"
        :dense="q.platform.is.mobile" :loading="loading" behavior="menu" @filter="filtro" requoired class="ellipsis" />

</template>

<script setup lang="ts">
import { QSelectOption, useQuasar } from 'quasar';
import { buscarExames } from 'src/service/ExameService'
import { ref } from 'vue';
import { Exame } from '../../model/models';
import { danger } from 'src/utils/alerta'
defineProps(['modelValue', 'label'])
const q = useQuasar()
const listaExames = ref<Array<QSelectOption<number>>>([])
const loading = ref(true)
const atualiza = (valor: string | number | null) => emits('update:modelValue', valor)

buscarExames()
    .then((response) => {
        listaExames.value = response.map((exame: Exame) => ({ value: exame.id, label: exame.nome }));
    }).catch(() => {
        danger('Ocorreu um erro durante a busca de Exames!')
    })
    .finally(() => {
        loading.value = false
    })

buscarExames()
const opcoesExames = ref(listaExames.value)
const emits = defineEmits(['update:modelValue'])

const filtro = (valor: string, update: CallableFunction) => {
    update(() => opcoesExames.value = (valor === '') ? listaExames.value : listaExames.value.filter(v => v.label.toLowerCase().indexOf(valor.toLowerCase()) > -1));
}

</script>