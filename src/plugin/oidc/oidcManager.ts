/**
 * @description: 接收到返回数据时的处理
*/

import oidcEvents from '@/plugin/oidc/oidcEvents'

const oidcManager = () => {
  oidcEvents
    .signinRedirectCallback()
    .then((res) => {
      let user = res.profile.name
      if (user === 'screen') {
        window.location.href = '../#/index'
      } else {
        window.location.href = '../#/login'
      }
    })
    .catch((e) => {
      console.error(e)
    })
}

export default oidcManager
