<template>
  <q-page class=" bg-grey-2 q-pa-md">
    <q-card class="bg-white q-pa-md ">
      <p class="text-light-blue-10 text-h6">App Saúde Clara </p>
      <q-separator />
      <p class="q-pt-lg">{{ dataAtual }}</p>
      <section>
        <p class="q-mt-sm text-caption">
          Olá, <strong> {{ nomeUsuario }}</strong>
          seja bem-vindo(a)!
        </p>
        <p v-if="!usuario.getEmail">Para aproveitar ao máximo nossos recursos, clique no menu à esquerda e entre agora!
        </p>
      </section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { usuarioStore } from 'src/stores/usuario-store';
import { ref } from 'vue';
const dataAtual = ref(new Date().toLocaleDateString("pt-br", {
  day: '2-digit', weekday: 'long', month: 'long', year: 'numeric'
}));
dataAtual.value = dataAtual.value.charAt(0).toUpperCase() + dataAtual.value.slice(1) + '.';
const usuario = usuarioStore();
const nomeUsuario = usuario.getNomeCompleto ? usuario.getNomeCompleto.toUpperCase() : 'USUÁRIO(A)'


</script>
