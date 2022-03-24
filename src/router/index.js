import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import Introduction from '../views/Introduction'
import ServiceDeclaration from '../views/ServiceDeclaration'
import Products from '../views/Products'
import CustomerService from '../views/CustomerService'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/introduction',
    name: '/introduction',
    component: Introduction
  },
  {
    path: '/serviceDeclaration',
    name: '/serviceDeclaration',
    component: ServiceDeclaration
  },
  {
    path: '/products',
    name: '/products',
    component: Products
  },
  {
    path: '/customerService',
    name: '/customerService',
    component: CustomerService
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
