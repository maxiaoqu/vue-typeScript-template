/**
 * @description: 处理单点登录的问题
 */

import oidcEvents from './oidcEvents'

export default class OidcService {
  getUser() {
    let self = this
    return new Promise((resolve, reject) => {
      oidcEvents.getUser().then(function(user) {
        if (user == null) {
          self.signIn()
          return resolve(null)
        } else {
          return resolve(user)
        }
      }).catch(function(err) {
        console.log(err)
        return reject(err)
      })
    })
  }

  signIn() {
    oidcEvents.signinRedirect().catch(function(err) {
      console.log(err)
    })
  }

  signOut() {
    debugger
    let self = this
    oidcEvents.signoutRedirect().then(function(resp) {
      console.log('signed out', resp)
      self.signIn()
    }).catch(function(err) {
      console.log(err)
    })
  }
}
