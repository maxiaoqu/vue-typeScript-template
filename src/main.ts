import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局样式
import '@/assets/style/index.scss'

// 全局组件注册
import Install from '@/utils/installComponent'

// 设置根节点，将项目中的px转化成rems
import '@/utils/rem'

Vue.use(Install)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
