<template>
  <section class="row justify-center items-center">
    <div class="col-12 col-md-9 q-ma-md">
      <InputBusca v-model="text" label="Buscar Exame" @update:modelValue="filtro" />
      <p class="q-pt-lg text-center" :class="q.platform.is.desktop ? 'text-body1' : 'text-body2'">
        <strong>Quantidade de exames catalogados:</strong>
        {{ qtdExames }}
      </p>
      <q-list separator v-if="exames.length">

        <q-item v-for="exame in examesFiltrados" :key="exame.id" v-if="examesFiltrados.length" clickable v-ripple
          @click="detalhesExame(exame.chave)" class="q-py-md">
          <q-item-section top thumbnail class="q-ml-none ">
            <q-img :src="exame.imagem" :alt="`Image do exame de ${exame.nome}`" width="100px" height="56px" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ exame.nome }}</q-item-label>
            <q-item-label caption :class="{ 'ellipsis-2-lines': q.platform.is.mobile }">{{ exame.resumo
              }}</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-item-section avatar class="absolute-right">
              <q-icon color="blue-grey-3" name="fa-solid fa-chevron-right" />
            </q-item-section>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list separator v-else>

        <q-item v-for="index in 10" :key="index">
          <q-item-section top thumbnail class="q-py-md ">
            <q-skeleton width="100px" height="56px" />
          </q-item-section>
          <q-item-section>
            <q-skeleton type="text" height="24px" width="200px" />
            <q-skeleton type="text" height="24px" width="800px" />
          </q-item-section>
          <q-item-section avatar>
            <q-item-section avatar class="absolute-right">
              <q-icon color="blue-grey-3" name="fa-solid fa-chevron-right" />
            </q-item-section>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { danger } from 'src/utils/alerta';
import { buscarExames } from 'src/service/ExameService';
import { Exame } from 'src/model/interfaces/Exame';
import InputBusca from 'src/components/common/InputBusca.vue'

const q = useQuasar()
const loading = ref(false)
const router = useRouter()

const exames = ref<Array<Exame>>([])
const examesFiltrados = ref<Array<Exame>>([])
const qtdExames = computed(() => exames.value.length);

onMounted(async () => { await buscaExames() })

const buscaExames = async () => {
  exames.value = q.localStorage.getItem('exames') || []
  examesFiltrados.value = exames.value
  await buscarExames()
    .then((response: Array<Exame>) => {
      exames.value = response
      q.localStorage.set('exames', exames.value)

    }).catch(() => {
      danger('Ocorreu um erro durante a busca de Exames!')
    })
    .finally(() => {
      loading.value = false
    })
  examesFiltrados.value = exames.value
}


const text = ref('')
const detalhesExame = (chave: string) => { router.push(`detalhes-exame/${chave}`); }

const filtro = (valor: string | number | null) => {
  if (typeof valor === 'string') {

    examesFiltrados.value = computed(() => (valor === '') ? exames.value : exames.value.filter((v: Exame) => v.nome.toLowerCase().indexOf(valor.toLowerCase()) > -1)).value;
  }
}

</script>
