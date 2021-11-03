import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewHello from '@/components/NewHello'

Vue.use(Router)
const routes = [
  {
    path: '/',
      name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/NewHello',
      name: 'NewHello',
    component: NewHello
  }
]

const router = new Router({
  routes
})

export default router

// 路由发生之前
router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from)
  next()
})

// 路由解析之前被调用
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve', to, from)
  next()
})

// 路由进入之后触发事件
router.afterEach((to, from) => {
  console.log(to, from)
})
