import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { getRequestData } from '@plugins/axios'

// 设置根节点，将项目中的px转化成rems
import '@/utils/rem'

// 全局组件、方法注册

// 全局样式
import '@/assets/style/index.scss'

// 全局组件、方法注册
import installComponent from '@/utils/install/installComponent'
import installPrototype from '@/utils/install/installPrototype'

Vue.use(installComponent)
Vue.use(installPrototype)

Vue.config.productionTip = false

// 获取当前环境下的json配置
getRequestData(`./static/config/${process.env.NODE_ENV}.json`, 'get', {}).then((res: any) => {
  Object.keys(res).forEach((key: string) => {
    Vue.prototype['$' + key] = res[key]
  })
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  console.info('方法注册成功！')
}).catch((err: any) => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  console.info('方法注册失败！', err)
})
