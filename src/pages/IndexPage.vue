<template>
  <q-page class="row items-center justify-evenly">
    <div class="col-lg-8 col-md-12">
      <listaExames-component></listaExames-component>
    </div>
    <div class="col-lg-8 col-md-12">
      <!-- <example-component
        title="Example component 1234"
        active
        :abacate="todos"
        :meta="meta"
      ></example-component> -->
    </div>
  </q-page>
</template>

<script setup lang="ts">
//import { ref } from 'vue';
//import { Todo, Meta } from 'components/models';
//import ExampleComponent from 'components/ExampleComponent.vue';
import ListaExamesComponent from 'components/ListaExamesComponent.vue';

defineOptions({
  name: 'IndexPage',
});

///*

// const todos = ref<Todo[]>([
//   {
//     id: 1,
//     content: 'ct1',
//   },
//   {
//     id: 2,
//     content: 'ct2',
//   },
//   {
//     id: 3,
//     content: 'ct3',
//   },
//   {
//     id: 4,
//     content: 'ct4',
//   },
//   {
//     id: 5,
//     content: 'ct5',
//   },
// ]);

// const meta = ref<Meta>({
//   totalCount: 1200,
// });

//*/
</script>
