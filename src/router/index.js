import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowOglasi from '../views/ShowOglasi.vue'
import MakeOglas from '../views/MakeOglas.vue'
import OglasView from '../views/OglasView.vue'
import AnimalView from '../views/AnimalView.vue'
import MackeView from '../views/MackeView.vue'
import PsiView from '../views/PsiView.vue'
import PticeView from '../views/PticeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import MojNalogView from '../views/MojNalogView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mojnalog',
    name: 'mojnalog',
    component: MojNalogView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/oglasview/:naziv',
    name: 'oglasview',
    component: OglasView
  },
  {
    path: '/showoglasi',
    name: 'showoglasi',
    component: ShowOglasi
  },
  {
    path: '/makeoglas',
    name: 'makeoglas',
    component: MakeOglas
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
    path: '/animal/:id',
    name: "animalview",
    component: AnimalView
  },
  {
    path: '/psi',
    name: "PsiView",
    component: PsiView
  },
  {
    path: '/macke',
    name: "MackeView",
    component: MackeView
  },
  {
    path: '/ptice',
    name: "PticeView",
    component: PticeView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
