import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/login.vue'
import register from '../components/register.vue'
import init from '../components/init.vue'
import devices from '../components/list_devices.vue'
import modalRegister from '../components/modalRegister.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/init',
      name: 'init',
      component: init,
      children: [
        {
          name: "devices",
          path: 'init/devices',
          component: devices
        }, 
        {
          name: "modalRegister",
          path: 'init/modalRegister',
          component: modalRegister
        },
      ]
    },
    {
      path: '/devices',
      name:"devices",
      component: devices
    }
  ],
})

export default router
