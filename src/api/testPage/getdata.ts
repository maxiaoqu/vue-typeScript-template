import vm from '@utils/install/vuePrototype'

let $Api = (window as any).$Api
// 获取数据
export const getUserInfo = (param) => {
  let params = param || {}
  const config = {
    url: $Api.dip + '/dataServe/getUserInfo',
    data: params,
    method: 'get'
  }
  return vm.$comRequestData(config)
}

// 文件上传
export const getFileUpdate = (param, filePath) => {
  let params = param || {}
  const config = {
    url: $Api.fip + '/fileServe/getFileUpdate',
    data: params,
    method: 'get'
  }
  return vm.$comRequestFile(config, filePath)
}
