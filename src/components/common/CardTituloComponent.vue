<template>
    <section v-if="q.platform.is.desktop">
        <q-card class="my-card text-h6 bg-blue-2">
            <q-card-section>
                <div>{{ titulo }}</div>
            </q-card-section>
        </q-card>
    </section>
</template>
<script setup>
import { useQuasar } from 'quasar';

defineProps(['titulo'])
const q = useQuasar()
</script>

<style lang="sass" scoped>
.my-card
  width: 100%

</style>