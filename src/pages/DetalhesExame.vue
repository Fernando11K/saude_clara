<template>
  <q-page class="row">
    <div class="q-gutter-y-md" style="width: 100vw">
      <q-card style="height: 100%">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey q-py-md"
          active-color="blue-9"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="infoGeral" label="Informações Gerais" />
          <q-tab name="preparo" label="Preparo" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="infoGeral">
            <div class="text-h5 text-bold">ULTRASSOM</div>

            <div>
              <q-img
                src="../assets/img/ultrassom.png"
                :ratio="16 / 9"
                class="q-my-md"
              />
              <div class="text-h6 text-bold q-ma-none q-mb-sm">
                Princípio de Funcionamento:
              </div>
              <p>
                Utiliza ondas sonoras de alta frequência para criar imagens das
                estruturas internas do corpo humano. Transdutor emite e recebe
                as ondas sonoras, que são convertidas em imagens em tempo real.
                Aplicações Clínicas:
              </p>
              <div class="text-h6 text-bold q-ma-none q-mb-sm">
                Aplicações Clínicas:
              </div>
              <p>
                Diagnosticar condições médicas como gravidez, doenças
                abdominais, cardíacas, musculoesqueléticas e vasculares. Guia
                procedimentos médicos, como biópsias e punções.
              </p>
            </div>
          </q-tab-panel>

          <q-tab-panel name="preparo">
            <div>
              <div class="text-h6 text-bold q-ma-none q-mb-sm">
                Preparação e Procedimento:
              </div>
              <p>
                Geralmente não requer preparação específica. O paciente pode ser
                solicitado a evitar alimentos sólidos algumas horas antes do
                exame, dependendo da área a ser examinada.
              </p>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="fa-solid fa-chevron-left"
        color="blue-9"
        @click="voltar()"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      tab: ref('infoGeral'),
    };
  },
  name: 'DetalharExame',
  methods: {
    voltar() {
      this.$router.push('/');
    },
  },
};
</script>
