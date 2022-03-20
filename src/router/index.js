import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bitcoin from '../views/Bitcoin.vue'
import Ethereum from '../views/Ethereum.vue'
import Dogecoin from '../views/Dogecoin.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bitcoin',
    name: 'Bitcoin',
    component: Bitcoin
  },
  {
    path: '/ethereum',
    name: 'ethereum',
    component: Ethereum
  },
  {
    path: '/dogecoin',
    name: 'dogecoin',
    component: Dogecoin
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
