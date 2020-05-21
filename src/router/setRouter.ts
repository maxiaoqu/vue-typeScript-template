import Vue from 'vue'
import VueRouter, { RouteConfig, RouterOptions } from 'vue-router'

Vue.use(VueRouter)

const startRouter: RouteConfig[] = []

const router = new VueRouter({
  mode: 'history',
  startRouter
} as RouterOptions)

export default router
