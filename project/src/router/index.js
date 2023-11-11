import Vue from 'vue'
import VueRouter from 'vue-router'
import viewTest from '../views/viewTest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'viewTest',
    component: viewTest
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
