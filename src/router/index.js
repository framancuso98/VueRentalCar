import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: () => import('../components/Welcome.vue'),
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
      path: '/home',
      name: 'Home',
      meta: {
        requiresAuth:true,
      },
      component: () => import('../components/Home.vue')
    },
    {
      path: '/allUtenti',
      name: 'ListaUtenti',
      meta: {
        requiresAuth:true,
      },
      component: () => import('../components/ListaUtenti.vue')
    },
    {
      path: '/allAuto',
      name: 'ListaAuto',
      meta: {
        requiresAuth:true,
      },
      component: () => import('../components/ListaAuto.vue')
    },
    {
      path: '/allPrenotazioni',
      name: 'ListaPrenotazioni',
      meta: {
        requiresAuth:true,
      },
      component: () => import('../components/ListaPrenotazione.vue')
    },
    {
      path: '/addUtente',
      name: 'AggiungiUtente',
      meta: {
        requiresAuth:true,
      },
      component: () => import('../components/AggiungiUtente.vue')
    },
    {
      path: '/addAuto',
      name: 'AggiungiAuto',
      meta: {
        requiresAuth:true,
      },
      component: () => import('../components/AggiungiAuto.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  const utente = localStorage.getItem("utente");
  const token = localStorage.getItem("token");
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (utente && token) {
      next();
    } else { 
      next({
        path: "/",
        query: { redirect: to.fullPath }
      })
    }
  }
  next();
});
export default router;
