// 配置路由
import VueRouter from 'vue-router'

import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'

import Welcome from '@/views/welcome'

import store from '@/store'
import NotFound from '@/views/404'

import Article from '@/views/article'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 登录
    { path: '/login', component: Login },
    { path: '/',
      component: Home,
      children: [
        { path: '/', component: Welcome }
      ]
    },
    // 通配以上没有的任何规则*通配
    { path: '*', component: NotFound },
    { path: '/article', component: Article }
  ]
})

// 前置导航守卫
router.beforeEach((to, from, next) => {
  // to去哪里from来自哪里next放行或者跳转指定路由
  if (to.path !== '/login' && !store.getUser().token) return next('/login')
  next()
})

export default router
