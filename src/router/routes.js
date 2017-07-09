// 基础结构设置
import Home from '@/views/Home'
// 404处理
import NotFound from '@/views/404.vue'

import Timeline from '@/views/Timeline'
import Column from '@/views/Column'
import Collect from '@/views/Collect'
import Find from '@/views/Find'
import Label from '@/views/Label'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '', component: Timeline }
    ]
  },
  {
    path: '/timeline',
    component: Home,
    children: [
      { path: '', component: Timeline }
    ]
  },
  {
    path: '/column',
    component: Home,
    children: [
      { path: '', component: Column }
    ]
  },
  {
    path: '/collect',
    component: Home,
    children: [
      { path: '', component: Collect }
    ]
  },
  {
    path: '/find',
    component: Home,
    children: [
      { path: '', component: Find }
    ]
  },
  {
    path: '/label',
    component: Home,
    children: [
      { path: '', component: Label }
    ]
  },
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

export default routes
