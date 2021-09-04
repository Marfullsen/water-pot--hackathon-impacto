import { createRouter, createWebHistory } from 'vue-router'
import PaginaPrincipal from '../views/PaginaPrincipal.vue'
import ComienzaReciclar from '../views/ComienzaReciclar.vue'
import AportaYa from '../views/AportaYa.vue'
import AcercaDe from '../views/AcercaDe.vue'

const routes = [
  {
    path: '/',
    name: 'PaginaPrincipal',
    component: PaginaPrincipal
  },
  {
    path: '/comienza_reciclar',
    name: 'ComienzaReciclar',
    component: ComienzaReciclar
  },
  {
    path: '/aportar_ya',
    name: 'AportaYa',
    component: AportaYa
  },
  {
    path: '/acerca_de',
    name: 'AcercaDe',
    component: AcercaDe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
