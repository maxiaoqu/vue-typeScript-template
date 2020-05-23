/**
 * @description axios的请求配置
 */

// axios相关配置【勿动】
import qs from 'qs'
import intercept from './intercept'
import { dealWithError } from './dealWithError'

// axios引入配置【勿动】
const axios = intercept

// 【检查】普通回调的请求
const checkData = (method, params) => {
  if (method === 'get' || method === 'delete') {
    params = { params: params }
  } else {
    params = qs.stringify(params)
  }
  return params
}

/**
 * @description: 【Axios】数据获取、数据上传
 * @param: {String}[action]接口地址
 * @param: {Object}[config]接口所需要的参数{{String}[action]接口地址,{String}[method]:请求方法（get、post、delete、put、path等）,{Object}[data]：接口参数}
 * @param: {Function}[resolve]Promise成功回调
 * @param: {Function}[reject]Promise失败回调
 * @returns: {String}接口返回的参数
 */
export const dataRequest = (action, config, resolve, reject) => {
  let method = config.method
  let params = config.data
  params = checkData(method, params)
  axios[method](action, params).then(res => {
    resolve(res)
  }).catch(err => {
    dealWithError(err)
  })
}

/**
 * @description: 【Axios】文件上传
 * @param: {String}[action]接口地址
 * @param: {Object}[config]接口所需要的参数{{String}[action]接口地址,{String}[method]:请求方法（get、post、delete、put、path等）,{Object}[data]：接口参数}
 * @param: {Function}[resolve]Promise成功回调
 * @param: {Function}[reject]Promise失败回调
 * @returns: {String}接口返回的参数
 */
export const fileRequest = (action, configs, resolve, reject) => {
  let method = configs.method
  let param = configs.data
  let config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  axios[method](action, param, config).then(res => {
    resolve(res)
  }).catch(err => {
    dealWithError(err)
  })
}
