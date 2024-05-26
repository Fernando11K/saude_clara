<template>
  <Suspense>
    <q-page class="row justify-center">
      <div class="q-gutter-y-md col-12 col-md-9 ">
        <q-card style="height: 100%">
          <q-tabs v-model="tab" dense class="text-grey q-py-md" active-color="blue-9" indicator-color="primary"
            align="justify" narrow-indicator>
            <q-tab name="infoGeral" label="Informações Gerais" />
            <q-tab name="realização" label="Realização" />
          </q-tabs>

          <q-separator />
          <q-tab-panels v-model="tab" v-if="exame" animated swipeable>
            <q-tab-panel name="infoGeral">
              <div class="row justify-between ">
                <div class="col-12 col-md ">
                  <div v-if="q.platform.is.mobile" class="text-bold text-uppercase text-h6 text-center">
                    {{ exame.nome }}
                  </div>
                  <q-img :src="exame.imagem" :ratio="16 / 9" class="q-my-md" />
                  <span v-if="q.platform.is.desktop" class="text-bold text-uppercase q-pl-sm text-h5">
                    {{ exame.nome }}
                  </span>
                </div>
                <div class="col-12 col-md  " :class="{ 'q-ma-md': q.platform.is.desktop }">
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
  </Suspense>
</template>

<script setup lang="ts">
import { onMounted, ref, Suspense } from 'vue';
import { useRouter } from 'vue-router';

import { useQuasar } from 'quasar';
import { buscarExamePorId } from 'src/service/ExameService';
import { Exame } from 'src/model/interfaces/Exame';

const exame = ref<Exame>()
onMounted(async () => {
  exame.value = await buscarExamePorId(props.chave) as Exame
})
const q = useQuasar()
const props = defineProps(['chave'])

const tab = ref('infoGeral');
const router = useRouter();
const voltar = () => { router.push('/exames'); };


</script>
