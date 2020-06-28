/**
 * @description 获取当前的环境是"电脑"还是"平板"
 */

//  获取当前的环境
const getPlatform = () => {
  let ua = navigator.userAgent
  let isFireFox = /(?:Firefox)/.test(ua)
  let isChrome = /(?:Chrome|CriOS)/.test(ua)
  let isWindowsPhone = /(?:Windows Phone)/.test(ua)
  let isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone
  let isAndroid = /(?:Android)/.test(ua)
  let isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua))
  let isPhone = /(?:iPhone)/.test(ua) && !isTablet
  let isPc = !isPhone && !isAndroid && !isSymbian && !isTablet
  return {
    isChrome: isChrome, // 谷歌浏览器（有点问题）
    isTablet: isTablet, // 平板
    isPhone: isPhone, // 手机
    isAndroid: isAndroid, // 手机
    isPc: isPc// pc
  }
}

// 获取当前登陆状态
const getUserStatus = () => {
  let isStatus = true
  return {
    isSendOut: isStatus, // "平板"端：发送指令
    isReceive: !isStatus// "电脑"端：接收指令
  }
}

// 判断当前的环境是否是"平板"||"电脑":是（true||"平板")、否（false||"电脑"）
export const isIpadPlatForm = () => {
  let platform = getPlatform()
  if (platform.isPc) {
    return false
  } else {
    return true
  }
}

// 判断当前的环境是否是"平板"&&"发送指令端":是（true)、否（false）
export const isIpad = () => {
  let platform = getPlatform()
  let userStatus = getUserStatus()
  if (platform.isPc || userStatus.isReceive) {
    return false
  } else {
    return true
  }
}

// 判断当前的环境是否是"电脑"&&"接收指令端":是（true)、否（false）
export const isPc = () => {
  let platform = getPlatform()
  let userStatus = getUserStatus()
  if (platform.isPc && userStatus.isReceive) {
    return true
  } else {
    return false
  }
}
