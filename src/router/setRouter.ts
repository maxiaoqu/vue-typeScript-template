import Vue from 'vue'
import VueRouter, { RouteConfig, RouterOptions } from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const startRouter: RouteConfig[] = []

const router = new VueRouter({
  startRouter
} as RouterOptions)

export default router
