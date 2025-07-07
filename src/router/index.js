import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/login',
      name: 'login',
  
      component: () => import('../views/LoginView.vue'),
    },

    
    {
      path: '/cidade',
      name: 'cidade',
    
      component: () => import('../views/CidadeView.vue'),
    },
     
    {
      path: '/meiao-locomocao',
      name: 'meio locomocao',
     
      component: () => import('../views/MeioLocomocaoView.vue'),
    },

    {
      path: '/viagem',
      name: 'viagem',
      
      component: () => import('../views/ViagemView.vue'),
    },


    {
      path: '/passageiros',
      name: 'passageiros',
 
      component: () => import('../views/PassageirosView.vue'),
    },

    {
      path: '/forma-pagamento',
      name: 'forma de pagamento',
 
      component: () => import('../views/FormaPagamento.vue'),
    },

    {
      path: '/resumo',
      name: 'resumo',
 
      component: () => import('../views/Resumo.vue'),
    },
  ],
})

export default router
