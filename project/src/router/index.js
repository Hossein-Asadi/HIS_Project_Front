import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import LandingPage from '@/views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
