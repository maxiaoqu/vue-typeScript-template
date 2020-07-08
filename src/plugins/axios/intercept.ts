/**
 * @description 添加axios的请求拦截、响应拦截
 */
import Axios from 'axios'
import dealWithError from './dealWithError'

const intercept = Axios

/**
 * @description: 添加请求拦截器
 * @param: {Object}[config]发起请求时的一系列参数
 * @returns: {Object}接口请求拦截器添加之后返回的参数
 */
intercept.interceptors.request.use((config) => {
  config.headers['author'] = 'maxiaoqu.com'
  // 除了登陆页和注册页，其他页面都需要携带token
  if (!config.url.includes('/login') || !config.url.includes('/register')) {
    config.headers['Authorization'] = 'user token'
  }
  // 判断是否是json文件，是的话baseURL为空
  if (config.url.includes('.json') || config.url.includes('.g')) {
    config.baseURL = ''
  }
  // 判断参数中是否含有'baseURL'，有的话拼接到config.url里去，
  // 如：config.params.baseURL='getUserinfo/123213123/12123'
  // 拼接后得到新的config.url = 'api/serverApi/getUserinfo/123213123/12123'
  if (config.params.baseURL) {
    config.url = config.url + config.params.baseURL
    delete config.params.baseURL
  }
  return config
}, (err) => {
  return Promise.reject(err)
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
      message: '暂无数据'
    }
  }
  return data
}, (err) => {
  let errorMessage = dealWithError(err)
  return Promise.reject(errorMessage)
})

export default intercept
