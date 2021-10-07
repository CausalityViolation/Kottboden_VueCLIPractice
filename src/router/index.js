import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/purchase',
    name: 'Purchase Merchandise',
    component: () => import(/* webpackChunkName: "about" */ '../views/Purchase.vue')
  },
  {
    path: "/farrows",
    name: "Information",
    component: () => import(/* webpackChunkName: "about" */ '../views/Information.vue')
  },
  {
    path: "/quiz",
    name: "Piglet Quiz",
    component: () => import(/* webpackChunkName: "about" */ '../views/Quiz.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
