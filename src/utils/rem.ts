// 当为APP手机端项目时
const appPxToRem = (viewHtml: any, appVersion: string, screenHeight: number, devicePixelRatio: number) => {
  let isAndroid = appVersion.match(/android/gi)
  let isIPhone = appVersion.match(/iphone/gi)
  let isIPad = appVersion.match(/iPad/gi)
  let viewWidth = document.documentElement.clientWidth || document.body.clientWidth
  viewHtml.style.fontSize = viewWidth / 20 + 'px'
}

// 当为PC电脑端项目时
const pcPxToRem = (viewHtml: any, appVersion: string, screenHeight: number, devicePixelRatio: number) => {
  let isWin = appVersion.match(/Windows/gi)
  let isMac = appVersion.match(/Mac/gi)
  viewHtml.style.fontSize = '16px'
}

// 检查并设置当前Webview环境的rem变量
const setRem = () => {
  let appVersion = navigator.appVersion || window.navigator.appVersion
  let screenHeight = window.screen.width || window.outerWidth
  let devicePixelRatio = window.devicePixelRatio || 1
  let viewHtml = document.querySelector('html')

  if (appVersion.includes('Mobile')) {
    appPxToRem(viewHtml, appVersion, screenHeight, devicePixelRatio)
  } else {
    pcPxToRem(viewHtml, appVersion, screenHeight, devicePixelRatio)
  }
}

setRem()
window.onresize = () => {
  setRem()
}
