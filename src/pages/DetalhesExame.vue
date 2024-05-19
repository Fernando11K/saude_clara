<template>
  <q-page class="row justify-center">
    <div class="q-gutter-y-md col-12 col-md-8">
      <q-card style="height: 100%">
        <q-tabs v-model="tab" dense class="text-grey q-py-md" active-color="blue-9" indicator-color="primary"
          align="justify" narrow-indicator>
          <q-tab name="infoGeral" label="Informações Gerais" />
          <q-tab name="realização" label="Realização" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" v-if="exame" animated swipeable>
          <q-tab-panel name="infoGeral">
            <div class="text-h5 text-bold text-uppercase">
              {{ exame.nome }}
            </div>
            <div class="row">
              <div class="col-md">
                <q-img :src="exame.imagem" :ratio="16 / 9" class="q-my-md" style="min-width: 350px" />
              </div>
              <div class="col-md q-ma-md">
                <div class="text-h6 text-bold">Descrição:</div>
                <p>{{ exame.descricao }}</p>
                <div class="text-h6 text-bold">Princípio de Funcionamento:</div>
                <p>{{ exame.principio }}</p>
                <div class="text-h6 text-bold">Aplicações Clínicas:</div>
                <p>{{ exame.aplicacoes }}</p>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="realização">
            <div>
              <div class="text-h6 text-bold q-ma-none q-mb-sm">Preparo:</div>
              <p>{{ exame.preparacao }}</p>
              <div class="text-h6 text-bold">Tempo de Execução:</div>
              <p>{{ exame.tempo_de_execucao }}</p>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="fa-solid fa-chevron-left" color="blue-9" @click="voltar" />
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import exames from 'src/assets/exames';
import { Exame } from 'src/components/models';
const props = defineProps(['idExame'])

const exame = ref(exames.find((exame: Exame) => exame.id == props.idExame))
const tab = ref('infoGeral');
const router = useRouter();
const voltar = () => {
  router.push('/');
};


</script>
