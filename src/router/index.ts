import router from './setRouter'
import { oidcRoutes, baseRoutes, indexRoutes, homeRoutes, childRoutes } from './routerPath'

// 添加参数，避免多次循环导致的错误
var getRouters

// 合并当前所有的路由
const newRouters = (to: any, next: any) => {
  const routerArr = oidcRoutes.concat(baseRoutes).concat(indexRoutes).concat(homeRoutes).concat(childRoutes)
  router.addRoutes(routerArr)
  next({ ...to, replace: true })
}

// 路由跳转之前
router.beforeEach((to, from, next) => {
  if (!getRouters) {
    getRouters = true
    newRouters(to, next)
  }

  if (to.path !== '/OidcCallback' && !localStorage.getItem('token')) {
    console.log(9999, 888)
    next({
      path: '/OidcCallback'
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
