import { isProduction } from '@/environment/process'

/*
* authority: 认证服务器,需要修改为自己的认证服务器
* client_id: 客户端 id ,按照约定修改即可
* redirect_uri: 认证服务器回调的客户端页面
* post_logout_redirect_uri: 登出回调链接
* */

// 运行环境【运行后台人员联调环境】----【运行：npm run dev】
const development = {
  authority: 'http://139.224.255.200:3010',
  client_id: 'cockpit-vue',
  redirect_uri: 'http://localhost:8100/#/oidc-callback',
  post_logout_redirect_uri: 'http://localhost:8100/#/oidc-logout',
  silent_redirect_uri: 'http://localhost:8100/#/oidc-silent-renew',
  response_type: 'code',
  scope: 'openid profile offline_access vue.api',
  automaticSilentRenew: true,
  automaticSilentSignin: true
}

// 打包环境【线上环境】----【打包：npm run build】
const production = {
  authority: 'http://139.224.255.200:3010',
  client_id: 'cockpit-vue',
  redirect_uri: 'http://139.224.255.200:3022/#/oidc-callback',
  post_logout_redirect_uri: 'http://139.224.255.200:3022/#/oidc-logout',
  silent_redirect_uri: 'http://139.224.255.200:3022/#/oidc-silent-renew',
  response_type: 'code',
  scope: 'openid profile offline_access vue.api',
  automaticSilentRenew: true,
  automaticSilentSignin: true
}

const oidcSettings = isProduction ? development : production

export default oidcSettings
