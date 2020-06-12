import {comRequestData, comRequestFile} from '@/plugin/axios'

// 获取数据
export const getUserInfo = (param) => {
  let params = param || {}
  const config = {
    url: '/dataServer/abc/cba',
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
