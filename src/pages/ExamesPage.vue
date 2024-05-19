<template>
    <q-page class="row items-center justify-evenly">
        <div class="col-lg-8 col-md-12">
            <ListaExamesComponent title="Lista de Exames" :exames="exames" />
        </div>
    </q-page>
</template>

<script setup lang="ts">
import ListaExamesComponent from 'components/ListaExamesComponent.vue';
import exames from 'src/assets/exames'

</script>