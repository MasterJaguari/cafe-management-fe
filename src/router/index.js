import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Lokal from '../views/Lokal.vue'
import Meni from '../views/Meni.vue'
import Admin from '../views/Admin.vue'
import EditProizvod from '../views/EditProizvod.vue'
import AdminMeni from '../views/AdminMeni.vue'
import AdminStolovi from '../views/AdminStolovi.vue'
import AdminKorisnici from '../views/AdminKorisnici.vue'
import EditKorisnik from '../views/EditKorisnik.vue'
import CreateKorisnik from '../views/CreateKorisnik.vue'
import EditStolovi from '../views/EditStolovi.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lokal',
    name: 'Lokal',
    component: Lokal
  },
  {
    path: '/meni',
    name: 'Meni',
    component: Meni
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/editProizvod/:id',
    name: 'EditProizvod',
    component: EditProizvod
  },
  {
    path: '/admin/meni',
    name: 'AdminMeni',
    component: AdminMeni
  },
  {
    path: '/admin/stolovi',
    name: 'AdminStolovi',
    component: AdminStolovi
  },
  {
    path: '/admin/korisnici',
    name: 'AdminKorisnici',
    component: AdminKorisnici
  },
  {
    path: '/admin/korisnici/edit/:id',
    name: 'EditKorisnik',
    component: EditKorisnik
  },
  {
    path: '/admin/korisnici/create',
    name: 'CreateKorisnik',
    component: CreateKorisnik
  },
  {
    path: '/admin/stolovi/edit/:id',
    name: 'EditStolovi',
    component: EditStolovi
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
