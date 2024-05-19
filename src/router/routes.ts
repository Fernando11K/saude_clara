import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', redirect: '/home' },
      { path: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'exames', component: () => import('pages/ExamesPage.vue') },
      { path: 'tabela', component: () => import('pages/TesteTabela.vue') },
      { path: 'detalhes-exame/:idExame', component: () => import('pages/DetalhesExame.vue'), props: true },
      { path: 'agenda-pessoal', component: () => import('pages/AgendaPessoalPage.vue'), meta: { requiresAuth: true } },
      { path: 'detalhes-agenda/:idAgenda', component: () => import('pages/DetalhesAgenda.vue'), props: true, meta: { requiresAuth: true } },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: '/criar-conta', component: () => import('pages/CriarContaPage.vue') },
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
