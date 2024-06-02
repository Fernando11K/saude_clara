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
                        <q-select :modelValue="'Hospital das Clinicas - SP'" :filled="q.platform.is.desktop"
                            :outlined="q.platform.is.mobile" :rounded="q.platform.is.mobile"
                            :dense="q.platform.is.mobile" disabled class="col-12" readonly />
                        <SelectExame v-model="exame" :label="'Exame:'" class="col-12" />
                        <InputDate v-model="data" class="col-12" />
                        <q-input v-model="observacao" :outlined="q.platform.is.mobile" :filled="q.platform.is.desktop"
                            :dense="q.platform.is.mobile" label="Observações:" type="textarea" class="col-12" />
                    </q-card-section>

                    <q-card-actions align="right" class="row justify-around">
                        <q-btn v-close-popup rounded icon="fa-solid fa-xmark" color="negative" label="Fechar"
                            class="col-5" />

                        <q-btn type="submit" rounded
                            :icon="ehEditar ? 'fa-solid fa-pencil' : 'fa-regular fa-calendar-check fa-bounce'"
                            :color="ehEditar ? 'primary' : 'positive'" :label="ehEditar ? 'Editar' : 'Agendar'"
                            :disable="desabilitaBotao" class="col-5" :loading="loading" />
                    </q-card-actions>
                </q-form>
            </q-card>
        </q-dialog>
    </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import InputDate from 'src/components/common/InputDate.vue'
import SelectExame from 'src/components//agenda/SelectExame.vue'
import { useQuasar } from 'quasar';
import { criarAgendamento, inserirAgendamento } from 'src/service/AgendamentoService';

const q = useQuasar()
const dialog = ref(false)
const props = defineProps(['label', 'agendamento'])
const emits = defineEmits(['atualiza'])
const observacao = ref('')
const desabilitaBotao = ref(false)
const loading = ref(false)
const ehEditar = ref(false)
const exame = ref('')
const data = ref('')
const carregaDados = async () => {
    if (ehEditar.value) {
        const { data: dataAgendamento, observacao: observacaoAgendamento, idExame, exame: exameRecebido } = props.agendamento
        exame.value = { label: exameRecebido.nome, value: idExame }
        data.value = dataAgendamento
        observacao.value = observacaoAgendamento
    }
}
const atualiza = () => { dialog.value = !dialog.value }
const verificaSeEhEdicao = () => {
    if (props.agendamento) {
        ehEditar.value = true
    }

}
verificaSeEhEdicao()
carregaDados()
defineExpose({ atualiza })
const agendar = () => {
    const payload = { idExame: exame.value.value, data: data.value, observacao: observacao.value };
    if (ehEditar.value) {
        inserirAgendamento({ ...payload, id: props.agendamento.id })
    } else {
        criarAgendamento(payload)
    }
    dialog.value = false
    emits('atualiza')

}
watchEffect(() => props.agendamento)
</script>