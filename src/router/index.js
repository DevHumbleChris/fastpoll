import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
       path: '/create-poll',
       name: 'create-poll',
       component: () => import('../views/CreatePoll.vue'),
       meta: {
        requiresAuth: true
       }
    },
    {
      path: '/public-polls',
      name: 'public-poll',
      component: () => import('../views/PublicPolls.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router
