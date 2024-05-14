<template>
  <div class="q-ma-sm">
    <InputBusca v-model="text" label="Buscar Exame" />
    <p>Quantidade de exames catalogados: {{ qtdExames }}</p>

    <q-list separator>
      <q-item v-for="exame in exames" :key="exame.id" clickable v-ripple @click="detalhesExame(exame.id)"
        class="q-py-md">
        <q-item-section top thumbnail class="q-ml-none">
          <img :src="exame.imagem" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ exame.exame }}</q-item-label>
          <q-item-label caption>{{ exame.resumo }}</q-item-label>
        </q-item-section>

        <q-item-section avatar>
          <q-item-section avatar class="absolute-right">
            <q-icon color="blue-grey-3" name="fa-solid fa-chevron-right" />
          </q-item-section>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import InputBusca from 'src/components/common/InputBusca.vue'

const props = defineProps(['exames'])

const qtdExames = computed(() => props.exames.length);

import { useRouter } from 'vue-router';

const router = useRouter()
const text = ref('')
const detalhesExame = (idExame: number) => {
  console.log(idExame)
  router.push(`detalhesExame/${idExame}`);
}

</script>
