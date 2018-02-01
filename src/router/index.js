import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Punch from '@/components/punch'
import My from '@/components/my'


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
      path:'/my',
      name:'my',
      component:My
    }
  ]
})
