import vm from '@/utils/install/vuePrototype'

// 获取数据
export const getUserInfo = (param) => {
  let params = param || {}
  const config = {
    url: vm.$Api.dip + '/dataServe/getUserInfo',
    data: params,
    method: 'get'
  }
  return vm.$comRequestData(config)
}
