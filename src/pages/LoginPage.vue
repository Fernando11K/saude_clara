<template>
  <q-page class="column flex-center bg-white" @click.self="mudarPosicao(false)">
    <BoxUsuario :titulo="'Login'" ref="boxUsuario">
      <q-form class="row justify-center" @submit.prevent="autenticar" @click.self="mudarPosicao(false)">
        <InputUsuarioLogin v-model="login.email" :label="'Email'" class="full-width q-pa-md" @focus="mudarPosicao" />
        <InputSenhaLogin v-model="login.senha" :label="'Senha'" class="full-width q-pa-md" @focus="mudarPosicao" />
        <q-btn type="submit" unelevated :rounded="q.platform.is.mobile" class="q-mt-md  col-11" color="primary"
          text-color="white" label="ENTRAR" :disabled="!login.email || !login.senha || loading" />
        <q-btn icon='fa-brands fa-google' @click="autenticacaoGoogle" outline :rounded="q.platform.is.mobile"
          class="q-mt-md col-11 bg-black" text-color="white" label="Fazer login com o Google" />
        <q-separator size="1px" color="grey-4" inset class="col-12 q-my-sm q-mt-md" />
        <span class="justify-center ">
          <q-btn unelevated :rounded="q.platform.is.mobile" color="positive" :to="'/criar-conta'">Criar Conta</q-btn>
        </span>
      </q-form>
    </BoxUsuario>
  </q-page>
</template>
<script setup lang="ts">

import { ref } from 'vue';
import InputUsuarioLogin from 'src/components/login/InputUsuarioLogin.vue';
import InputSenhaLogin from 'src/components/login/InputSenhaLogin.vue';
import { autenticacaoLocal, autenticacaoGoogle, loading } from 'src/service/LoginService';
import BoxUsuario from 'src/components/common/BoxUsuario.vue';
import { Login } from 'src/model/types/Login';
import { useQuasar } from 'quasar';

const q = useQuasar()
const boxUsuario = ref()
const autenticar = () => autenticacaoLocal(login.value)
const login = ref<Login>({ email: '', senha: '' })

const mudarPosicao = (status: boolean) => {
  boxUsuario.value.alteraPosicaoCard(status)
}

</script>

<style scoped>
.login {
  border: 2px solid #676767;
  padding: 10px;
  border-radius: 25px;
}
</style>
