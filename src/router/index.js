import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  }]


const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})

export default router
