

import { computed } from 'vue';
import { usuarioStore } from 'src/stores/usuario-store';
import IMenu from 'src/model/interfaces/IMenu'

const usuario = usuarioStore()
export const menu = computed(() => [
    {
        icon: 'fa-solid fa-user',
        label: usuario.getNome
            ? usuario.getNome
            : usuario.getEmail
                ? 'Bem-vindo'
                : 'Entrar',
        iconColor: 'primary',
        separator: true,
        ativo: true,
        rota: !usuario.getEmail ? '/login' : '/home'
    },
    {
        label: 'Lista de Exames',
        legenda: 'Catálogo de Exames Médicos',
        icon: 'fa-solid fa-list',
        ativo: true,
        rota: '/exames',
    },
    {
        label: 'Agenda Pessoal',
        legenda: 'Controle sua agenda de exames',
        icon: 'fa-regular fa-calendar-check',
        ativo: usuario.getEmail,
        rota: '/agenda-pessoal'
    },
    {
        icon: 'fa-solid fa-person-walking-arrow-right',
        label: 'Sair',
        separator: true,
        ativo: usuario.getEmail,
        iconColor: 'primary',
        rota: '/login'
    },
] as Array<IMenu>);
