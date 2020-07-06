import router from './setRouter'
import { oidcRoutes, baseRoutes } from './routerPath'
import { limitsRouter } from '@/router/limitsRouter'

// 添加参数，避免多次循环导致的错误
var getRouters

// 合并当前所有的路由
const newRouters = (to: any, next: any) => {
  let routerConfig: any = []
  // 获取到权限路由
  let limitsRouterArr: any = limitsRouter()
  // 把权限路由加进去
  routerConfig = oidcRoutes.concat(limitsRouterArr)
  // 因'*'的路由存在baseRoutes里，所以放在最后不会影响其他
  let routerArr = routerConfig.concat(baseRoutes)
  router.addRoutes(routerArr)
  next({ ...to, replace: true })
}

// 路由跳转之前
router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token')
  if (!getRouters) {
    getRouters = true
    newRouters(to, next)
  }

  if (to.path === '/oidc-callback') {
    next()
  } else if (to.path !== '/login' && !token) {
    next({
      path: '/login'
    })
  } else if (to.path === '' || to.path === '/') {
    next({
      path: '/index'
    })
  } else {
    next()
  }
})
// 路由跳转之后
router.afterEach((to, from) => {

})

export default router
