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
    
      component: () => import('../views/CidadesView.vue'),
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
 
      component: () => import('../views/FormaPagamentoView.vue'),
    },

    {
      path: '/resumo',
      name: 'resumo',
 
      component: () => import('../views/ResumoView.vue'),
    },

    {
       path: '/gerar-passagens',
      name: 'gerar passagens',
 
      component: () => import('../views/GerarPassagensView.vue'),
    },
  ],
})

export default router
