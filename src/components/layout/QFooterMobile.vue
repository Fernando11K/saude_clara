<template>
  <q-footer
    v-if="q.platform.is.mobile"
    reveal
    elevated
    class="bg-blue-8 glossy text-white"
  >
    <q-separator class="shadow-up-24 glossy bg-grey-1" />
    <q-toolbar class="bg-red-14 glossy">
      <div class="row justify-around col-12 fonte-footer">
        <q-btn
          size="md"
          flat
          round
          icon="fa-solid fa-bars"
          class="fonte-footer"
          @click="toggleLeftDrawer"
        >
        </q-btn>
        <q-btn
          size="md"
          flat
          round
          icon="fa-solid fa-house "
          class="fonte-footer"
          @click="home"
        >
        </q-btn>
        <q-btn
          v-if="false"
          size="md"
          flat
          round
          icon="fa-solid fa-bell fa-beat"
          class="fonte-footer disabled"
        >
        </q-btn>
        <q-btn
          size="md"
          flat
          round
          icon="fa-regular fa-calendar-days fa-beat"
          class="fonte-footer"
          @click="tabela"
        >
        </q-btn>
        <q-btn size="md" flat round class="fonte-footer">
          <q-icon size="md" name="fa-solid fa-pen fa-bounce"> </q-icon>
        </q-btn>
      </div>
    </q-toolbar>
  </q-footer>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const router = useRouter();
const q = useQuasar();
const emits = defineEmits(['statusMenuLateral']);

const toggleLeftDrawer = () => {
  emits('statusMenuLateral');
};
const home = () => {
  router.push('/');
};
const tabela = () => {
  router.push('/tabela');
};
</script>
