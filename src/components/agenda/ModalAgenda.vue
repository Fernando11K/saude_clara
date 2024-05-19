<template>
    <div class="q-pa-md q-gutter-sm ">

        <q-dialog v-model="dialog" :backdrop-filter="'blur(4px)'" transition-show="slide-up" transition-hide="rotate">
            <q-card ref="card" style="min-width: 350px; min-height: 300px;" class="bg-grey-1">
                <q-form @submit.prevent="agendar">
                    <q-card-section class="bg-primary text-white ">
                        <div class="text-h6 row justify-between">
                            <q-icon class="q-mr-md q-pt-xs" size="sm" name="fa-regular fa-calendar-days" />{{ label }}
                            <q-btn icon="close" flat round dense v-close-popup />
                        </div>
                    </q-card-section>

                    <q-card-section class="row q-gutter-y-md">
                        <SelectExame v-model="exame" :label="'Exame:'" class="col-12" />
                        <InputDate v-model="data" class="col-12" />
                        <q-input v-model="observacao" :outlined="q.platform.is.mobile" :filled="q.platform.is.desktop"
                            :dense="q.platform.is.mobile" label="Observações:" type="textarea" class="col-12" />

                    </q-card-section>

                    <q-card-actions align="right" class="row justify-around">
                        <q-btn v-close-popup rounded icon="fa-solid fa-xmark" color="negative" label="Fechar"
                            class="col-5" />
                        <q-btn type="submit" rounded icon="fa-regular fa-calendar-check fa-bounce" color="positive"
                            label="Agendar" :disable="desabilitaBotao" class="col-5" :loading="loading" />
                    </q-card-actions>
                </q-form>
            </q-card>
        </q-dialog>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { positive } from 'src/utils/alerta'
import InputDate from 'src/components/common/InputDate.vue'
import SelectExame from 'src/components//agenda/SelectExame.vue'
import { useQuasar } from 'quasar';

defineProps(['label'])
const atualiza = () => { dialog.value = !dialog.value }
defineExpose({ atualiza })
const observacao = ref('')
const desabilitaBotao = ref(false)
const loading = ref(false)

const q = useQuasar()
const exame = ref('')
const data = ref('')
const dialog = ref(false)
const agendar = () => {
    positive('Agendado com sucesso!')
    //   dialog.value = false
}
</script>