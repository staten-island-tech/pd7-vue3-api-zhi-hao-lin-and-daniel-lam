import { createRouter, createWebHistory } from 'vue-router'
import CardView from'../views/CardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'card',
      component: CardView
    },
    {
      path: '/doughnut',
      name: 'doughnut',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChartView.vue')
    },
    {
      path: '/bar',
      name:'bar',
      component: () => import('../views/BarView.vue')
    }
  ]
})

export default router
