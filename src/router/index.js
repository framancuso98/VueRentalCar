import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../components/Welcome.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import('../components/SignIn.vue')
  },
  {
    path: '/allUtenti',
    name: 'ListaUtenti',
    component: () => import('../components/ListaUtenti.vue')
  },
  {
    path: '/allAuto',
    name: 'ListaAuto',
    component: () => import('../components/ListaAuto.vue')
  },
  {
    path: '/allPrenotazioni',
    name: 'ListaPrenotazioni',
    component: () => import('../components/ListaPrenotazione.vue')
  },
  {
    path: '/addUtente',
    name: 'AggiungiUtente',
    component: () => import('../components/AggiungiUtente.vue')
  },
  {
    path: '/addAuto',
    name: 'AggiungiAuto',
    component: () => import('../components/AggiungiAuto.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
