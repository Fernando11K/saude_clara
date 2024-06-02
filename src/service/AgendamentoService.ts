import { agendamentoByIdRef, agendamentoByUIdRef, agendamentoRef, push } from 'src/boot/firebase';
import { Agenda } from 'src/model/interfaces/Agenda';
import EnumStatusAgendamento from 'src/model/types/EnumStatusAgenda';
import { danger, positive } from 'src/utils/alerta';
import { set, onValue, update, remove } from 'firebase/database';
import { ref } from 'vue';
import { usuarioStore } from 'src/stores/usuario-store';
import { buscarExamePorId } from './ExameService';
import { spinnerFacebook } from 'src/utils/spinner';
const loading = ref(false)
const usuario = usuarioStore()
const retornarMensagem = (msg: string) => `<p class="text-h6">Tentando ${msg}. Aguarde...</p>`


const buscarAgendamentoPorUId = async () => {
    loading.value = true

    return new Promise<Agenda | null>((resolve, reject) => {
        onValue(agendamentoByUIdRef(usuario.getId), (snapshot) => {
            const agendamento = snapshot.val();
            const subNos = Object.entries(agendamento).map(([id, subNo]) => ({
                id,
                ...subNo
            }));
            resolve(subNos);
        }, (error) => {
            reject(error);
        });
        {
            onlyOnce: false
        }
        loading.value = false
    });

}

const buscarAgendamentoPorId = async (idAgendamento) => {
    loading.value = true

    return new Promise<Agenda | null>((resolve, reject) => {

        onValue(agendamentoByIdRef(idAgendamento, usuario.getId), async (snapshot) => {
            const exame = await buscarExamePorId(snapshot.val()?.idExame)
            resolve({ id: snapshot.key, ...snapshot.val(), exame });
        }, (error) => {
            reject(error);
        });

        loading.value = false
    });

}



const criarAgendamento = (agendamento: Agenda) => {
    loading.value = true
    push(agendamentoByUIdRef(usuario.getId), {
        ...agendamento,
        local: 'Hospital Legal - SP',
        status: EnumStatusAgendamento.Pendente
    })
        .then((response) => {
            positive(`Agendamento realizado com sucesso!`)
        })
        .catch(() => {
            danger('Ocorreu um erro durante o agendamento, tente novamente mais tarde!')
        })
        .finally(() => {
            loading.value = false
        })

}

const inserirAgendamento = (agendamento: Agenda) => {//Substitui os dados    
    if (agendamento.id)
        set(agendamentoByIdRef(agendamento.id, usuario.getId), { ...agendamento, local: 'Hospital das Clinicas - SP', dataAtualizacao: new Date().toLocaleString('pt-BR').replace(',', ''), status: EnumStatusAgendamento.Pendente })
            .then(() => {
                positive(`Agendamento atualizado com sucesso!`)
            })
            .catch(() => {
                danger('Ocorreu um erro durante a atualização do agendamento, tente novamente mais tarde!')
            })
            .finally(() => {
                loading.value = false
            })

}

const atualizarAgendamento = async (agendamento: Agenda) => {
    loading.value = true
    spinnerFacebook.mostrar(retornarMensagem('cancelar agendamento'))
    await update(agendamentoByIdRef(agendamento.id, usuario.getId), { status: 2 })
        .then(() => {
            positive('Agendamento cancelado com sucesso!')
        })
        .catch(() => {
            danger('Ocorreu um erro ao realizar a atualização!')
        })
        .finally(() => {
            spinnerFacebook.ocultar()

            loading.value = false
        })

}


const excluirAgendamento = async (idAgendamento: string) => {
    loading.value = true;

    await remove(agendamentoByIdRef(idAgendamento, usuario.getId))
        .then(() => {

            positive('Agendamento excluído com sucesso!');
        })
        .catch(() => {

            danger('Ocorreu um erro ao excluir o agendamento.');
        })
        .finally(() => {

            loading.value = false;
        })

};


export { criarAgendamento, inserirAgendamento, buscarAgendamentoPorUId, buscarAgendamentoPorId, atualizarAgendamento, excluirAgendamento, loading }