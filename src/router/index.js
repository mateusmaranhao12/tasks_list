import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ListarTarefa from '../views/ListarTarefa.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/listar-tarefa',
    name: 'ListarTarefa',
    component: ListarTarefa
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
