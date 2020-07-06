import { UserModule } from '@/store/modules/user'
import { indexRoutes, homeRoutes, childRoutes, testRoutes } from './routerPath'

const concatRouter = indexRoutes.concat(homeRoutes).concat(childRoutes).concat(testRoutes)

// 根据路由里的permissionCode值比较得到新的路由（权限路由）
// permissionCode可是一个数组或者一个字符串，集体看后台的返回，这里mock时直接设置为：true
const hasPermission = (route: any) => {
  if (route.meta && route.meta.permissionCode) {
    let result = false
    let routerPermissionCode = route.meta.permissionCode
    if (routerPermissionCode) {
      result = true
    }
    return result
  }
  return false
}

// 去除没必要的路由字段
const formatRouter = (deleteParams: string[], router: any) => {
  if (deleteParams.length !== 0) {
    deleteParams.forEach((dParam: string) => {
      delete router[dParam]
    })
  }
  return router
}

const getPermissionRouter = (deleteParams: string[], routerArr: any, index: number) => {
  let permissionRouter: any = []
  routerArr.forEach((router: any) => {
    let result: any = { ...router }
    result = formatRouter(deleteParams, result)
    if (hasPermission(result)) {
      if (result.children) {
        result.children = getPermissionRouter(deleteParams, result.children, index + 1)
      }
      // 去除meta的相关路由字段，保证路由的纯洁性
      delete result.meta.permissionCode
      // 给meta里增加椅子饿属性，保证路由的一些状态
      result.meta.sid = index
      permissionRouter.push(result)
    }
  })
  return permissionRouter
}

export const limitsRouter = () => {
  let deleteParams: string[] = []
  let permissionRouter = getPermissionRouter(deleteParams, concatRouter, 1)
  UserModule.setUserPermissionRouter(permissionRouter)
  return permissionRouter
}
