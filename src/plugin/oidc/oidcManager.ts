/**
 * @description: 接收到返回数据时的处理
*/

import Oidc from 'oidc-client'

const oidcManager = () => {
  let manager = new Oidc.UserManager({ response_mode: 'query' })
  manager
    .signinRedirectCallback()
    .then((res) => {
      let user = res.profile.name
      if (user === 'screen') {
        window.location.href = '../#/dpIndex/dataCenterDP'
      } else {
        window.location.href = '../#/pcIndex/dataCenterPC'
      }
    })
    .catch((e) => {
      console.error(e)
    })
}

export default oidcManager
