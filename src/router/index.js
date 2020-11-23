import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AlbumDetail from '../views/AlbumDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/albums/:id',
    name: 'AlbumDetail',
    component: AlbumDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
