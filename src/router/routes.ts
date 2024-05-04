import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/tabela', component: () => import('pages/TesteTabela.vue') },
      { path: '/detalhesExame', component: () => import('pages/DetalhesExame.vue') },
      { path: '/agendaPessoal', component: () => import('pages/AgendaPessoal.vue') },

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
