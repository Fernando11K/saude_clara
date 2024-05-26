<template>
    <q-page class="bg-grey-3 q-pa-md">
        <q-card class="bg-white q-pa-md">
            <CardTituloComponent :titulo="'Lista de Exames'" />
            <ListaExamesComponent title="Lista de Exames" />
        </q-card>
    </q-page>
</template>

<script setup lang="ts">
import ListaExamesComponent from 'components/ListaExamesCard.vue';
import CardTituloComponent from 'src/components/common/CardTituloComponent.vue'


</script>