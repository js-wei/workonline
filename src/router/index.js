import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Punch from '@/components/punch'
import My from '@/components/my'
import Login from '@/components/login'
import Register from '@/components/register'


Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  linkExactActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/punch',
      name:'punch',
      component:Punch
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/my',
      name:'my',
      component:My,
      meta: { requiresAuth: true }
    }
  ]
})
