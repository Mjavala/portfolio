import Vue from 'vue'
import VueRouter from 'vue-router'
import lpv1 from '@/components/lpv1'
import projects from '@/components/projects'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: lpv1
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  }
]

const router = new VueRouter({
  routes
})

export default router
