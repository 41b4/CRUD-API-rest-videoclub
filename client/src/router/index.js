import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PeliculasView from '@/views/PeliculasView'
import DetalleView from '@/views/DetalleView'
import GenerosView from '@/views/GenerosView'
import GenerosListaView from '@/views/GenerosLista'
import DirectoresView from '@/views/DirectoresView'
import DirectoresListaView from '@/views/DirectoresLista'
import PrestamosView from '@/views/PrestamosView'
import CrearPelicula from '@/views/CrearPelicula'
import CrearView from '@/views/CrearView'
import ClientesView from '@/views/ClientesView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalog/peliculas',
    name:'peliculas',
    component: PeliculasView
  },
  {
    path: '/catalog/peliculas/:id',
    name: 'peliculas_detalle',
    component:DetalleView
  },
  {
    path: '/catalog/pelicula/create',
    name: 'pelicula_crear',
    component: CrearPelicula
  },
  {
    path: '/catalog/generos',
    name: 'generos',
    component:GenerosView
  },
  {
    path: '/catalog/crear',
    name: 'crear',
    component:CrearView
  },
  {
    path: '/catalog/generos/:id',
    name: 'generos_lista',
    component: GenerosListaView
  },
  {
    path: '/catalog/directores',
    name: 'directores',
    component:DirectoresView
  },
  {
    path: '/catalog/directores/:id',
    name: 'directores_lista',
    component: DirectoresListaView
  },
  {
    path: '/prestamos',
    name: 'prestamos',
    component: PrestamosView
  },
  {
    path:'/clientes',
    name:'clientes',
    component: ClientesView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
