import { RouteConfig } from 'vue-router'

import Index from '@/frameSkeleton/layout/index.vue'
import Home from '@/frameSkeleton/layout/home.vue'
import Child from '@/frameSkeleton/layout/child.vue'
import Test from '@/frameSkeleton/layout/test.vue'

// Oidc页面路由
export const oidcRoutes: RouteConfig[] = [
  {
    path: '/OidcCallback',
    name: 'OidcCallback',
    meta: {
      title: '单点登录回调页面'
    },
    component: () => import('@/frameSkeleton/oidc/OidcCallback.vue')
  }, {
    path: '/OidcLogout',
    name: 'OidcLogout',
    meta: {
      title: '单点退出登录回调'
    },
    component: () => import('@/frameSkeleton/oidc/OidcLogout.vue')
  }, {
    path: '/OidcRenew',
    name: 'OidcRenew',
    meta: {
      title: '单点登录其他操作'
    },
    component: () => import('@/frameSkeleton/oidc/OidcRenew.vue')
  }
]

// 基础页面路由
export const baseRoutes: RouteConfig[] = [
  {
    path: '/',
    name: '_index',
    redirect: '/index',
    meta: {
      title: '首页'
    }
  }, {
    path: '/index',
    name: 'index',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/Home.vue')
  }, {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录页'
    },
    component: () => import('@/frameSkeleton/login/index.vue')
  }, {
    path: '/401',
    name: '401',
    meta: {
      title: 'error401'
    },
    component: () => import('@/frameSkeleton/error/error401.vue')
  }, {
    path: '/403',
    name: '403',
    meta: {
      title: 'error403'
    },
    component: () => import('@/frameSkeleton/error/error403.vue')
  }, {
    path: '*',
    name: '404',
    meta: {
      title: 'error404'
    },
    component: () => import('@/frameSkeleton/error/error404.vue')
  }
]

// 大屏端页面路由
export const indexRoutes: RouteConfig[] = [
  {
    path: '/indexRoutes',
    name: 'indexRoutes',
    meta: {
      title: '大屏端风格'
    },
    redirect: '/indexRoutes/Admin1',
    component: Index,
    children: [{
      path: 'Admin1',
      name: 'Admin1',
      meta: {
        title: '大屏端1'
      },
      component: () => import('@/views/Admin.vue')
    }, {
      path: 'Home1',
      name: 'Home1',
      meta: {
        title: '大屏端2'
      },
      component: () => import('@/views/Home.vue')
    }]
  }
]

// 后台管理系统页面路由
export const homeRoutes: RouteConfig[] = [
  {
    path: '/homeRoutes',
    name: 'homeRoutes',
    meta: {
      title: '后台管理风格'
    },
    redirect: '/homeRoutes/Admin2',
    component: Home,
    children: [{
      path: 'Admin2',
      name: 'Admin2',
      meta: {
        title: '后台管理系统1'
      },
      component: () => import('@/views/Admin.vue')
    }, {
      path: 'Home2',
      name: 'Home2',
      meta: {
        title: '后台管理系统2'
      },
      component: () => import('@/views/Home.vue')
    }]
  }
]

// 其他系统页面路由
export const childRoutes: RouteConfig[] = [
  {
    path: '/childRoutes',
    name: 'childRoutes',
    meta: {
      title: '其他风格'
    },
    redirect: '/childRoutes/Admin3',
    component: Child,
    children: [{
      path: 'Admin3',
      name: 'Admin3',
      meta: {
        title: '其他系统1'
      },
      component: () => import('@/views/Admin.vue')
    }, {
      path: 'Home3',
      name: 'Home3',
      meta: {
        title: '其他系统2'
      },
      component: () => import('@/views/Home.vue')
    }]
  }
]

// 案例的使用路由（按需删除即可）
export const testRoutes: RouteConfig[] = [
  {
    path: '/testRoutes',
    name: 'testRoutes',
    meta: {
      title: '测试页面风格'
    },
    redirect: '/testRoutes/UseComponentsNo1',
    component: Test,
    children: [{
      path: 'UseComponents',
      name: 'UseComponents',
      meta: {
        title: '组件使用页面1'
      },
      component: () => import('@/viewsTest/useComponents.vue')
    }, {
      path: 'UseMixins',
      name: 'UseMixins',
      meta: {
        title: 'Mixins方法的使用'
      },
      component: () => import('@/viewsTest/useMixins.vue')
    }, {
      path: 'useProps',
      name: 'useProps',
      meta: {
        title: 'Prop传参'
      },
      component: () => import('@/viewsTest/useProps.vue')
    }, {
      path: 'UseRequest',
      name: 'UseRequest',
      meta: {
        title: 'Axios请求方法的使用'
      },
      component: () => import('@/viewsTest/useRequest.vue')
    }, {
      path: 'UseSameMethodsNo1',
      name: 'UseSameMethodsNo1',
      meta: {
        title: '不同页面调去相同方法-1'
      },
      component: () => import('@/viewsTest/useSameMethods-1.vue')
    }, {
      path: 'UseSameMethodsNo2',
      name: 'UseSameMethodsNo2',
      meta: {
        title: '不同页面调去相同方法-2'
      },
      component: () => import('@/viewsTest/useSameMethods-2.vue')
    }]
  }
]
