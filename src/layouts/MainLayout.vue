<template>
  <q-layout view="hHh LpR fFf">
    <QHeaderComponent @statusMenuLateral="toggleLeftDrawer" />
    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink v-for="link in menu" :key="link.label" :item="link" />
      </q-list>
    </q-drawer>
    <QFooterMobile @statusMenuLateralEsq="toggleLeftDrawer" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import QHeaderComponent from 'src/components/layout/QHeaderComponent.vue';
import QFooterMobile from 'src/components/layout/QFooterMobile.vue';
import { menu } from 'src/assets/menu';
import { useQuasar } from 'quasar';
const q = useQuasar()


const leftDrawerOpen = ref(q.platform.is.desktop);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
