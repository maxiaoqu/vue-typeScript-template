import { RouteConfig } from 'vue-router'

// 基础页面路由
export const baseRoutes: RouteConfig[] = [{
  path: '/home',
  name: 'home',
  component: () => import('@/views/Home.vue')
}, {
  path: '/admin',
  name: 'admin',
  component: () => import('@/views/Admin.vue')
}]
