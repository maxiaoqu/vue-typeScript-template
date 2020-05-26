/*
* 全局组件注册
* */
const components = {}

const install = (Vue, opts = {}) => {
  var objArr = Object.keys(components)
  if (objArr.length !== 0) {
    objArr.forEach((key) => {
      Vue.component(key, components[key])
    })
  }
}
export default install
