import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { 
      path: '/signup',
      name: 'signup',
      component: () => import('./pages/auth/SignUp.vue')
    },
    { 
      path: '/signin',
      name: 'signin',
      component: () => import('./pages/auth/SignIn.vue')
    }
  ]
});

export default router