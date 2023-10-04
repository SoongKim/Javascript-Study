import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewBinding from '../views/NewBinding.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import('../views/DataBinding.vue')
  },
  {
    path:'/newbinding',
    name:'NewBinding',
    component: (NewBinding)
  },
  {
    path:'/key',
    name:'FromKey',
    component: () => import('../views/FromKeyEvent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
