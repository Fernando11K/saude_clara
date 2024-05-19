<template>
    <q-input clearable :modelValue="model" @update:modelValue="atualiza" :label="label" outlined
        :dense="q.platform.is.mobile" :rounded="q.platform.is.mobile" square>
        <template v-slot:prepend>
            <q-icon name="search" />
        </template>
    </q-input>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

const q = useQuasar()
defineProps(['label', 'model'])
const emits = defineEmits(['update:modelValue'])
const atualiza = (valor: string | number | null) => emits('update:modelValue', valor)
</script>