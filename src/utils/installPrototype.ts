/*
* 全局组件注册
* Vue.prototype.$key = prototype[key]
* */
const prototype = {}

const installPrototype = (Vue, opts = {}) => {
  var prototypeObjArr = Object.keys(prototype)
  if (prototypeObjArr.length !== 0) {
    prototypeObjArr.forEach((key) => {
      Vue.prototype['$' + key] = prototype[key]
    })
  }
}
export default installPrototype
