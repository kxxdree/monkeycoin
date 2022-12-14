import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import Register from '@/views/Register.vue'
import MainLogIn from '@/views/MainLogIn.vue'
import SignIn from '@/views/SignIn.vue'
import MainLogOff from '@/views/MainLogOff.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/mainlogin',
    name: 'mainlogin',
    component: MainLogIn
  },
  {
    path: '/mainlogoff',
    name: 'mainlogoff',
    component: MainLogOff
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  }
]

const router = new VueRouter({
  routes
})

export default router
