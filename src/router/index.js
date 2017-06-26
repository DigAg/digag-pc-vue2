import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 基础结构设置
import Home from '@/views/Home'
// 404处理
import NotFound from '@/views/404.vue'

import Type1 from '@/views/Content/Type1/Type1'
import Type2 from '@/views/Content/Type2/Type2'

const routes = [
  { path: '/', component: Home },
  {
    path: '/timeline',
    component: Home,
    children: [
      { path: '', component: Type1 },
      { path: 'type1', component: Type1, name: 'Type1' },
      { path: 'type2', component: Type2, name: 'Type2' }
    ]
  },
  { path: '/column', component: Home },
  { path: '/collect', component: Home },
  { path: '/find', component: Home },
  // 404处理
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '*',
    redirect: { path: '/404' }
  }
]

export default new Router({
  mode: 'history',
  routes
})
