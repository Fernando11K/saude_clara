<template>
  <section class="row justify-center items-center">
    <div class="col-12 col-md-9 q-ma-md">
      <InputBusca v-model="text" label="Buscar Exame" />
      <p class="q-pt-lg text-center" :class="q.platform.is.desktop ? 'text-body1' : 'text-body2'">
        <strong>Quantidade de exames catalogados:</strong>
        {{ qtdExames }}
      </p>
      <q-list separator>
        <q-intersection v-for="exame in exames" :key="exame.id" transition="jump-right">
          <q-item clickable v-ripple @click="detalhesExame(exame.chave)" class="q-py-md">
            <q-item-section top thumbnail class="q-ml-none">
              <img :src="exame.imagem" :alt="`Image do exame de ${exame.nome}`" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ exame.nome }}</q-item-label>
              <q-item-label caption>{{ exame.resumo }}</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-item-section avatar class="absolute-right">
                <q-icon color="blue-grey-3" name="fa-solid fa-chevron-right" />
              </q-item-section>
            </q-item-section>
          </q-item>
        </q-intersection>

      </q-list>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import InputBusca from 'src/components/common/InputBusca.vue'
const q = useQuasar()
const loading = ref(false)

const router = useRouter()

const exames = ref<Array<Exame>>([])
buscarExames()
  .then((response) => {
    exames.value = response
  }).catch(() => {
    danger('Ocorreu um erro durante a busca de Exames!')
  })
  .finally(() => {
    loading.value = false
  })

buscarExames()

const qtdExames = computed(() => exames.value.length);

import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { Exame } from './models';
import { danger } from 'src/utils/alerta';
import { buscarExames } from 'src/service/ExameService';

const text = ref('')
const detalhesExame = (chave: string) => {

  router.push(`detalhes-exame/${chave}`);
}

</script>
