/**
 * @description: 处理单点登录的问题
 */
import oidcEvents from './oidcEvents'
import { UserModule } from '@/store/modules/user'

// 到登陆页面
export const oidcSignIn = () => {
  oidcEvents.signinRedirect({
    state: {
      message: window.location.href,
      signUpFlag: true
    },
    useReplaceToNavigate: true
  }).then(res => {
    console.log('登录成功', res)
  }).catch(err => {
    console.error('登录失败', err)
  })
}

// 登陆后回调
export const oidcSigninRedirect = () => {
  oidcEvents.signinRedirectCallback().then((user) => {
    if (user.id_token) {
      UserModule.setUserInfo(user)
      let setTime = setTimeout(() => {
        if (user.id_token) {
          clearTimeout(setTime)
          window.location.href = '#/index'
        } else {
          clearTimeout(setTime)
          window.location.href = '#/login'
        }
      }, 1200)
    } else {
      oidcSignIn()
    }
  }).catch((err) => {
    console.error(err)
  })
}

// 获取当前用户信息
export const oidcGetUserInfo = () => {
  oidcEvents.getUser().then((user: any) => {
    UserModule.setUserInfo(user)
  }).catch((err) => {
    console.error(err)
  })
}

// 退出登陆
export const oidcSignOut = () => {
  localStorage.clear()
  sessionStorage.clear()
  oidcEvents.removeUser().then((reset) => {
    console.log(1121212, reset)
  }).catch((err) => {
    console.error(err)
  })
}
