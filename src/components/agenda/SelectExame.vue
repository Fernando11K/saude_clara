<template>
    <q-select :modelValue="modelValue" @update:modelValue='atualiza' :options="opcoes" :label="label" use-input
        clearable :filled="q.platform.is.desktop" :outlined="q.platform.is.mobile" :rounded="q.platform.is.mobile"
        :dense="q.platform.is.mobile" />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

const q = useQuasar()
defineProps(['opcoes', 'modelValue', 'label'])
const emits = defineEmits(['update:modelValue'])
const atualiza = (valor: string | number | null) => emits('update:modelValue', valor)

</script>