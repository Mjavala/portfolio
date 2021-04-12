import Vue from 'vue'
import VueRouter from 'vue-router'
import lpv1 from '@/components/lpv1'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: lpv1
  }
]

const router = new VueRouter({
  routes
})

export default router
