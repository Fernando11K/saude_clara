<template>
  <q-layout view="hHh LpR fFf">
    <QHeaderComponent @statusMenuLateral="toggleLeftDrawer" />
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <QFooterMobile @statusMenuLateral="toggleLeftDrawer" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
import QHeaderComponent from 'src/components/layout/QHeaderComponent.vue';
import QFooterMobile from 'src/components/layout/QFooterMobile.vue';


const linksList: EssentialLinkProps[] = [
  {
    title: 'Login',
    caption: 'Entrar ou Cadastrar',
    icon: 'fa-solid fa-user',
    route: '/login',
  },
  {
    title: 'Lista de Exames',
    caption: 'Catálogo de Exames Médicos',
    icon: 'fa-solid fa-list',
    route: '/',
  },
  {
    title: 'Agenda Pessoal',
    caption: 'Controle sua agenda de exames',
    icon: 'fa-regular fa-calendar-check',
    route: '/agendaPessoal',
  }

];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
