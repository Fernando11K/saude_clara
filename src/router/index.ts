import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes';
import { auth } from 'src/boot/firebase'
import { warning } from 'src/utils/alerta';



const router = createRouter({
  history: createWebHistory(),
  routes
})



router.beforeEach((to, from, next) => {
  auth.onAuthStateChanged((usuario) => {
    if (to.meta.requiresAuth && !usuario) {
      warning('É necessário estar logado para esta ação!')
      next('/login')
    } else {
      next()
    }

  })
})



export default router;