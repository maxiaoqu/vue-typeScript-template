import { UserManager } from 'oidc-client'
import oidcSettings from '@environment/oidcSettings'

var oidcEvents = new UserManager(oidcSettings)

oidcEvents.events.addUserLoaded(function(user) {
  console.log('New User Loaded：', arguments)
  console.log('Acess_token: ', user.access_token)
})

oidcEvents.events.addAccessTokenExpiring(function() {
  console.log('AccessToken Expiring：', arguments)
})

oidcEvents.events.addAccessTokenExpired(function() {
  console.log('AccessToken Expired：', arguments)
  console.log('Session expired. Going out!')
  oidcEvents.signoutRedirect().then((resp) => {
    console.log('signed out', resp)
  }).catch((err) => {
    console.log(err)
  })
})

oidcEvents.events.addSilentRenewError(function() {
  console.error('Silent Renew Error：', arguments)
})

oidcEvents.events.addUserSignedOut(function() {
  console.log('UserSignedOut：', arguments)
  console.log('Going out!')
  oidcEvents.signoutRedirect().then((resp) => {
    console.log('signed out', resp)
  }).catch((err) => {
    console.log(err)
  })
})

export default oidcEvents
