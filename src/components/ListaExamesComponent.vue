<template>
  <div class="q-pa-sm">
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

    <q-list separator>
      <q-item
        v-for="itens in 15"
        :key="itens"
        clickable
        v-ripple
        @click="detalhesExame()"
      >
        <q-item-section top thumbnail class="q-ml-none">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>meta</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <!-- <p v-for="n in 15" :key="n">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
      praesentium molestias a adipisci, dolore vitae odit, quidem consequatur
      optio voluptates asperiores pariatur eos numquam rerum delectus commodi
      perferendis voluptate?
    </p> -->
  </div>
</template>

<script>
export default {
  name: 'PaginaIndex',
  methods: {
    detalhesExame() {
      this.$router.push('/detalhesExame');
    },
  },
};
</script>
