<template>
  <q-item v-if="item.ativo" clickable tag="a" :to="item.rota" @click="sair(item)" :active="!!item.ativo">
    <q-item-section v-if="item.icon" avatar>
      <q-icon :name="item.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ item.label }}</q-item-label>
      <q-item-label caption>{{ item.legenda }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { signOut } from 'firebase/auth';
import { auth } from 'src/boot/firebase'
import IMenu from 'src/model/interfaces/IMenu';
import { usuarioStore } from 'src/stores/usuario-store';
import { danger, info } from 'src/utils/alerta';

const usuario = usuarioStore()

defineProps(['item'])
const sair = (valor: IMenu) => {
  if (valor.label === "Sair") logout();
}
const logout = () => {
  signOut(auth)
    .then(() => {
      info('Usuário deslogado com sucesso!')
      usuario.limparDados()
    })
    .catch(() => danger('Usuário ou senha inválidos', 3000))

}
</script>
