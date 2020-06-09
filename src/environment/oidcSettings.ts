import { isProduction } from '@/environment/process'

const nodeEvnt = require('@/environment/nodeEvnt.ts')
const nodeEnvPort = nodeEvnt.port
/*
* authority: 认证服务器,需要修改为自己的认证服务器
* client_id: 发起认证请求的客户端的唯一标识，这个客户端事先已经在oidc-server.dev这个站点注册过了,按照约定修改即可
* response_type: 区别于oauth2授权请求的一点，必须包含有id_token这一项
* scope: 区别于oauth2授权请求的一点，必须包含有openid这一项,
* redirect_uri: 是登陆成功后跳转回来的地址
* post_logout_redirect_uri: OAuth2注销后重定向UR,登出回调链接
* automaticSilentRenew: 为true是启用自动安静刷新token.
* */

// 运行环境【运行后台人员联调环境】----【运行：npm run dev】
const development = {
  authority: 'https://demo.identityserver.io/',
  client_id: 'interactive.public',
  response_type: 'code',
  scope: 'openid profile email api offline_access',
  redirect_uri: `http://localhost:${nodeEnvPort}/#/OidcCallback`,
  post_logout_redirect_uri: `http://localhost:${nodeEnvPort}/#/OidcCallback`,
  silent_redirect_uri: `http://localhost:${nodeEnvPort}/#/OidcCallback`,
  automaticSilentRenew: true,
  automaticSilentSignin: true
}

// 打包环境【线上环境】----【打包：npm run build】
const production = {
  authority: 'https://demo.identityserver.io/',
  client_id: 'interactive.public',
  response_type: 'code',
  scope: 'openid profile email api offline_access',
  redirect_uri: `http://example.maxiaoqu.com/vuetsdemo/#/OidcCallback`,
  post_logout_redirect_uri: `http://example.maxiaoqu.com/vuetsdemo/#/OidcCallback`,
  silent_redirect_uri: `http://example.maxiaoqu.com/vuetsdemo/#/OidcCallback`,
  automaticSilentRenew: true,
  automaticSilentSignin: true
}

const oidcSettings = isProduction ? production : development

export default oidcSettings
