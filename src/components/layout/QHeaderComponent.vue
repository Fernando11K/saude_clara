<template>
  <q-header
    reveal
    elevated
    class="bg-blue-9"
  >
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />

      <q-toolbar-title class="text-center">
        <q-avatar class="pointer">
          <q-icon @click="toggleFullscreen" name="fa-solid fa-heart" />
        </q-avatar>
        Saúde Clara
      </q-toolbar-title>

      <!--  <div>Saúde Clara v0.0.1</div>-->
    </q-toolbar>
  </q-header>
</template>
<script setup>
import { useQuasar } from 'quasar';

const q = useQuasar();
const emits = defineEmits(['statusMenuLateral']);

const toggleFullscreen = () =>
  q.fullscreen.isActive ? q.fullscreen.exit() : q.fullscreen.request();
const toggleLeftDrawer = () => {
  emits('statusMenuLateral');
};
</script>
