<template>
  <q-footer
    v-if="q.platform.is.mobile"
    reveal
    elevated
    class="bg-blue-9 glossy text-white"
  >
    <q-separator class="shadow-up-24 glossy bg-grey-1" />
    <q-toolbar class="bg-blue-9">
      <div class="row justify-around col-12 fonte-footer">
        <q-btn
          size="md"
          flat
          round
          icon="fa-solid fa-list"
          class="fonte-footer"
          @click="home()"
        >
        </q-btn>

        <q-btn
          size="md"
          flat
          round
          icon="fa-regular fa-calendar-check"
          class="fonte-footer"
          @click="agendaPessoal()"
        >
        </q-btn>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

const q = useQuasar();
const router = useRouter()
const home = () => router.push('/');
const agendaPessoal = () => router.push('/agendaPessoal');
</script>


