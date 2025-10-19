import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/login.vue' // Se importa con el atributo name del componente
import register from "../components/register.vue"
import init from "../components/init.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path:"/register",
      name: "register",
      component: register
    },
    {
      path:"/init",
      name:"init",
      component:init
    }
  ]
})

export default router
