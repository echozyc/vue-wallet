import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../page/HomePage'
import MyAssets from '../page/MyAssets'
import PersonalCenter from '../page/PersonalCenter'
import ApplicationCenter from '../page/ApplicationCenter'
import BlockProduction from '../page/BlockProduction'
import AssetEvaluation from '../page/AssetEvaluation'
import BlockBrowse from '../page/BlockBrowse'
import Vote from '../page/Vote'
import TransferAccounts from '../page/TransferAccounts'
import Node from '../page/Node'
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
      redirect: '/HomePage',
      component: Detailed,
      children: [
        {
          //首页
          path: '/HomePage',
          component: HomePage
        },
        {
          //我的资产
          path: '/MyAssets',
          component: MyAssets
        },
        {
          //个人中心
          path: '/PersonalCenter',
          component: PersonalCenter
        },
        {
          //应用中心
          path: '/ApplicationCenter',
          component: ApplicationCenter
        },
        {
          //资产评估
          path: '/AssetEvaluation',
          component: AssetEvaluation
        },
        {
          //区块生产
          path: '/BlockProduction',
          component: BlockProduction
        },
        {
          //区块浏览
          path: '/BlockBrowse',
          component: BlockBrowse
        },
        {
          //投票
          path: '/Vote',
          component: Vote
        },
        {
          //转帐
          path: '/TransferAccounts',
          component: TransferAccounts
        },
        {
          //节点
          path: '/Node',
          component: Node
        }
      ]
    }
  ]
})
