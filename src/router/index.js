import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Pages/Home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
