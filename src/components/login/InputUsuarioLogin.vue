<template>
    <q-input for="email" standout="bg-info" round outlined dense bg-color="grey-1" :modelValue='modelValue'
        @update:modelValue='atualiza' type='text' label="label" autocomplete="username" :rules="[
            val => !!val || 'Digite o email!',
            val => /^\S+@\S+\.\S+/.test(val) || 'Email inválido!',
        ]" lazyRules required>
        <template v-slot:prepend>
            <q-icon name="fa-solid fa-user" />
        </template>
    </q-input>
</template>

<script setup lang="ts">
const emits = defineEmits(['update:modelValue'])
defineProps(['modelValue'])
const atualiza = (value: string | number | null) => emits('update:modelValue', value)

</script>
