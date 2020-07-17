import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 设置根节点，将项目中的px转化成rems
import '@/utils/rem'

// 引用插件的样式

// 全局样式
import '@/assets/style/index.scss'

// 全局组件、方法注册
import installComponent from '@/utils/install/installComponent'
import installPrototype from '@/utils/install/installPrototype'

Vue.use(installComponent)
Vue.use(installPrototype)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
