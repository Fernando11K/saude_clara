<template>
    <q-page class="bg-grey-2 q-pa-md">
        <q-card class="bg-white q-pa-md">
            <CardTituloComponent :titulo="'Lista de Exames'" />
            <ListaExamesComponent title="Lista de Exames" :exames="exames" />
        </q-card>
    </q-page>
</template>

<script setup lang="ts">
import ListaExamesComponent from 'components/ListaExamesCard.vue';
import CardTituloComponent from 'src/components/common/CardTituloComponent.vue'

import exames from 'src/assets/exames'

</script>