import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Intro from '../views/Intro'
import About from '../views/About'
import Insert from '../views/Insert'
import CannotFind from '../views/CannotFind'
import Edit from '../views/Edit'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/insert',
    name: 'Insert',
    component: Insert
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    props:true
  },
  {
    path: '*',
    name: 'CannotFind',
    component: CannotFind
  },
]

const router = new VueRouter({
  routes
})

export default router
