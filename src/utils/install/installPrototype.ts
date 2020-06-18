/*
* 全局组件注册
* Vue.prototype.$key = prototype[key]
* */
import baseURL from '@/environment/baseUrl'
import { comRequestData, comRequestFile } from '@/plugin/axios'

const prototype = {
  baseURL,
  comRequestData,
  comRequestFile
}

const installPrototype = (Vue, opts = {}) => {
  var prototypeObjArr = Object.keys(prototype)
  if (prototypeObjArr.length !== 0) {
    prototypeObjArr.forEach((key) => {
      Vue.prototype['$' + key] = prototype[key]
    })
  }
}

export default installPrototype
