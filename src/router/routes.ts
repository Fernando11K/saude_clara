import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/tabela', component: () => import('pages/TesteTabela.vue') },
      { path: '/detalhesExame/:exame', name: 'detalhesExame', component: () => import('pages/DetalhesExame.vue'), },
      { path: '/agendaPessoal', name: 'agendaPessoal', component: () => import('pages/AgendaPessoal.vue'), },
      { path: '/detalhesAgenda/:agenda', name: 'detalhesAgenda', component: () => import('pages/DetalhesAgenda.vue') },
      { path: '/agendaForm/:agenda?', name: 'agendaForm', component: () => import('pages/AgendaForm.vue'), },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
