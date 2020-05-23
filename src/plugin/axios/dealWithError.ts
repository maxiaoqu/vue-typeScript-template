/**
 * @description: 对一些返回错误的一些信息进行处理
 * @param: {Object}[error]发起请求、接口走error时的相关参数
 * @returns: {Object}返回的一些提示语，有利于排除问题的所在
 */
const dealWithError = (error) => {
  let errorMessage: any = Object.create(null)
  errorMessage.success = error.state || false
  let status = 400
  switch (status) {
    case 400:
      errorMessage.data = '请求错误.'
      break
    case 401:
      errorMessage.data = '当前会话已失效,请重新登录.'
      break
    case 403:
      errorMessage.data = '拒绝访问.'
      break
    case 404:
      errorMessage.data = '请求地址出错'
      break
    default:
      errorMessage.data = '错误编码' + status
      break
  }
  console.error(errorMessage.data)
  return errorMessage
}

export default dealWithError
