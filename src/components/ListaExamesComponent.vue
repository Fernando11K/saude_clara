<template>
  <div class="q-ma-sm">
    <q-input outlined v-model="text" label="Buscar Exame" class="q-my-md">
      <template v-slot:append>
        <q-icon
          v-if="text !== ''"
          name="close"
          @click="text = ''"
          class="cursor-pointer"
        />
        <q-icon name="search" />
      </template>
    </q-input>

    <p>Quantidade de exames catalogados: {{ qtdExames }}</p>

    <q-list separator>
      <q-item
        v-for="exame in exames"
        :key="exame.id"
        clickable
        v-ripple
        @click="detalhesExame(exame)"
        class="q-py-md"
      >
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
import { computed } from 'vue';
import { Exame } from './models';

interface Props {
  title: string;
  exames?: Exame[];
}

const props = withDefaults(defineProps<Props>(), {
  exames: () => [],
});

const qtdExames = computed(() => props.exames.length);
</script>

<script lang="ts">
export default {
  name: 'PaginaIndex',
  methods: {
    detalhesExame(exame: Exame) {
      let exameObj = JSON.stringify(exame);
      //console.log(exameObj);
      this.$router.push({ name: 'detalhesExame', params: { exame: exameObj } });
    },
  },
  data() {
    return {
      text: '',
    };
  },
};
</script>
