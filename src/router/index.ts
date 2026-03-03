import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import MisTrabajos from "@/pages/TrabajosHechos/MisTrabajos.vue";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      },
    {
      path: '/trabajo/:id', 
      name: 'trabajo-detalle',
      component: MisTrabajos,
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    },
  ]          
})