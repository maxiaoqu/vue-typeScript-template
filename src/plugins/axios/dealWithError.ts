/**
 * @description: 对一些返回错误的一些信息进行处理
 * @param: {Object}[error]发起请求、接口走error时的相关参数
 * @returns: {Object}返回的一些提示语，有利于排除问题的所在
 */
const dealWithError = (err) => {
  let errorMessage: any = Object.create(null)
  let requestMessage = err.request
  let responseMessage = err.response
  errorMessage.success = requestMessage.withCredentials || false
  errorMessage.statusText = responseMessage.statusText
  errorMessage.date = responseMessage.headers.date
  let status = responseMessage.status
  switch (status) {
    case 400:
      errorMessage.message = '请求错误'
      break
    case 401:
      errorMessage.message = '未授权，请重新登录!'
      break
    case 403:
      errorMessage.message = '拒绝访问'
      break
    case 404:
      errorMessage.message = '请求错误，未找到该资源'
      break
    case 405:
      errorMessage.message = '请求方法未允许'
      break
    case 408:
      errorMessage.message = '请求超时'
      break
    case 500:
      errorMessage.message = '服务器端出错'
      break
    default:
      errorMessage.message = '错误编码' + status
      break
  }
  return errorMessage
}

export default dealWithError
