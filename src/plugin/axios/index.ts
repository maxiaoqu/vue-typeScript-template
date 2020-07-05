/**
 * @description: 接口请求总入口
 */

import { dataRequest, fileRequest } from './request'

const zuul = ''

/**
 * @description: 普通请求方法汇总
 * @param: {String}[action]接口地址
 * @param: {Object}[config]接口所需要的参数{{String}[method]:请求方法（get、post、delete、put、path等）,{Object}[data]：接口参数}
 * @param: {Function}[resolve]Promise成功回调
 * @param: {Function}[reject]Promise失败回调
 * @param: {Array||String}[filePath]标记是否是文件传输、同时包含文件的路径
 * @returns: {String}接口返回的参数
 */
const chooseRequest = (action, config, resolve, reject, filePath) => {
  // 先判断是否是文件上传
  if (filePath) {
    console.info('axios-文件操作')
    return fileRequest(action, config, resolve, reject)
  } else {
    console.info('axios-数据操作')
    return dataRequest(action, config, resolve, reject)
  }
}

/**
 * @description: 【Request一】数据操作
 * @param: {String}[action]接口地址
 * @param: {String}[method]:请求方法（get、post、delete、put、path等）
 * @param: {Object}[params]：接口参数
 * @returns: {String}接口返回的参数
 */
export const getRequestData = (action, method, params) => {
  let config = {
    method: method,
    data: params
  }
  action = zuul + action
  return new Promise((resolve, reject) => {
    return chooseRequest(action, config, resolve, reject, null)
  })
}

/**
 * @description:【Request二】文件操作:（照片、音频、视频）
 * @param: {String}[action]接口地址
 * @param: {String}[method]:请求方法（get、post、delete、put、path等）
 * @param: {Object}[params]：接口参数
 * @param: {Array||String}[filePath]文件的路径
 * @returns: {String}接口返回的参数
 */
export const getRequestFile = (action, method, params, filePath) => {
  let config = {
    method: method,
    data: params
  }
  action = zuul + action
  return new Promise((resolve, reject) => {
    return chooseRequest(action, config, resolve, reject, filePath)
  })
}

/**
 * @description:【Request四】文件操作:（照片、音频、视频）【接口提取公共Api用到】
 * @param: {Object}[config]接口所需要的参数{{String}[action]接口地址,{String}[method]:请求方法（get、post、delete、put、path等）,{Object}[data]：接口参数}
 * @returns: {String}接口返回的参数
 */
export const comRequestData = (config) => {
  let action = zuul + config.url
  return new Promise((resolve, reject) => {
    return chooseRequest(action, config, resolve, reject, null)
  })
}

/**
 * @description:【Request四】文件操作:（照片、音频、视频）【接口提取公共Api用到】
 * @param: {Object}[config]接口所需要的参数{{String}[action]接口地址,{String}[method]:请求方法（get、post、delete、put、path等）,{Object}[data]：接口参数}
 * @param: {Array||String}[filePath]文件的路径
 * @returns: {String}接口返回的参数
 */
export const comRequestFile = (config, filePath) => {
  let action = zuul + config.url
  return new Promise((resolve, reject) => {
    return chooseRequest(action, config, resolve, reject, filePath)
  })
}
