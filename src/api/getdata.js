import { comRequestData, comRequestFile } from '@/request'

// 获取数据
export const getUserInfo = (param) => {
  let params = param || {}
  const config = {
    url: '/dataServe/getUserInfo',
    data: params,
    method: 'get'
  }
  return comRequestData(config)
}

// 文件上传
export const getFileUpdate = (param, filePath) => {
  let params = param || {}
  const config = {
    url: '/fileServe/getFileUpdate',
    data: params,
    method: 'get'
  }
  return comRequestFile(config, filePath)
}
