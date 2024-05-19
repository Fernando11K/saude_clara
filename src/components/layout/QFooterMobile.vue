<template>
  <q-footer v-if="q.platform.is.mobile" reveal elevated class="bg-blue-9 glossy text-white">
    <q-separator class="shadow-up-24 glossy bg-grey-1" />
    <q-toolbar class="bg-blue-9 orientation-portrait ">
      <div class="row justify-around col-12 fonte-footer">
        <q-btn size="md" flat round icon="fa-solid fa-bars" class="fonte-footer" @click="toggleLeftDrawer" />
        <q-btn size="md" flat round icon="fa-solid fa-house " class="fonte-footer" :to="'/home'"
          :disabled="!usuario.getEmail" />
        <q-btn size="md" flat round icon="fa-solid fa-list" class="fonte-footer" :to="'/exames'" />
        <q-btn size="md" flat round icon="fa-regular fa-calendar-check" class="fonte-footer" :to="'agenda-pessoal'"
          :disabled="!usuario.getEmail" />
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { usuarioStore } from 'src/stores/usuario-store';
import { warning } from 'src/utils/alerta';
import { useRouter } from 'vue-router';
const emits = defineEmits(['statusMenuLateralEsq'])
const q = useQuasar();
const router = useRouter()
const usuario = usuarioStore()

const toggleLeftDrawer = () => emits('statusMenuLateralEsq')
</script>
