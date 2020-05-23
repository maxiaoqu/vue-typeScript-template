import Oidc from 'oidc-client'

var oidcEvents = new Oidc.UserManager({
  authority: 'xxxx', // 授权中心，需要对接相应的公司的IT安全童鞋
  client_id: 'xxx', // 项目的id需要后端配置
  redirect_uri: 'xxx', // sso授权成功之后的跳转路由，在这个路由，我们需要做重定向处理
  response_type: 'id_token',
  scope: 'openid_profile'
})

Oidc.Log.logger = console
Oidc.Log.level = Oidc.Log.INFO

oidcEvents.events.addUserLoaded(function(user) {
  console.log('New User Loaded：', arguments)
  console.log('Acess_token: ', user.access_token)
})

oidcEvents.events.addAccessTokenExpiring(function() {
  console.log('AccessToken Expiring：', arguments)
})

oidcEvents.events.addAccessTokenExpired(function() {
  console.log('AccessToken Expired：', arguments)
  alert('Session expired. Going out!')
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
  alert('Going out!')
  console.log('UserSignedOut：', arguments)
  oidcEvents.signoutRedirect().then((resp) => {
    console.log('signed out', resp)
  }).catch((err) => {
    console.log(err)
  })
})

export default oidcEvents
