/**
 * @description 添加axios的请求拦截、响应拦截
 */
import Axios from 'axios'
import { dealWithError } from './dealWithError'
import { isProduction } from '@/environment/process'
import baseURL from '@/environment/baseUrl'

const intercept = Axios

/**
 * @description: 添加请求拦截器
 * @param: {Object}[config]发起请求时的一系列参数
 * @returns: {Object}接口请求拦截器添加之后返回的参数
 */
intercept.interceptors.request.use((config) => {
  // 除了登陆页和注册页，其他页面都需要携带token
  if (!config.url.includes('/login') || !config.url.includes('/register')) {
    config.headers['Authorization'] = 'user token'
  }
  // 判断是否是json文件，是的话baseURL为空
  if (config.url.includes('.json') || config.url.includes('.g')) {
    config.baseURL = ''
  } else if (isProduction) {
    config.baseURL = baseURL.dip
  } else {
    // 如果在vue.config.js中配置了proxy的话，就不需要else，注释即可
    config.baseURL = baseURL.dip
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

/**
 * @description: 添加响应拦截器
 * @param: {Object}[config]请求相应时的一系列参数
 * @returns: {Object}接口相应拦截器拦截处理数据之后返回的参数
 */
intercept.interceptors.response.use(res => {
  let { data } = res
  if (res.status !== 200) return false
  if (data.data === '') {
    return {
      success: false,
      data: '暂无数据'
    }
  }
  return data
}, (error) => {
  let errorMessage = dealWithError(error)
  return Promise.reject(errorMessage)
})

export default intercept
