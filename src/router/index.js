import Vue from 'vue'
import Router from 'vue-router'

import Fir from '../page/Fir'
import Sec from '../page/Sec'
import Tir from '../page/Tir'
import For from '../page/For'
import Fiv from '../page/Fiv'
import Six from '../page/Six'
import Sev from '../page/Sev'
import Eig from '../page/Eig'
import Nin from '../page/Nin'
import Ten from '../page/Ten'
// 按需加载
const Login = () => import('../page/Login/Login')
const Detailed = () => import('../page/Detailed/Detailed')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/',
      component: Detailed,
      children: [
        {
          path: '/Fir',
          component: Fir
        },
        {
          path: '/Sec',
          component: Sec
        },
        {
          path: '/Tir',
          component: Tir
        },
        {
          path: '/For',
          component: For
        },
        {
          path: '/Fiv',
          component: Fiv
        },
        {
          path: '/Six',
          component: Six
        },
        {
          path: '/Sev',
          component: Sev
        },
        {
          path: '/Eig',
          component: Eig
        },
        {
          path: '/Nin',
          component: Nin
        },
        {
          path: '/Ten',
          component: Ten
        }
      ]
    }
  ]
})
