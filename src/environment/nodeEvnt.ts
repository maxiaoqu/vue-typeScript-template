/**
 * @description 配置运行环境的相关接口地址，在vue.config.js里的proxy用到
 */

const nodeEnv = {
  port: '2048',
  // 数据接口
  dip: {
    target: 'http://server.maxiaoqu.com:6666'
  },
  // ddPush推送接口
  pip: {
    target: 'http://server.maxiaoqu.com:7777'
  },
  // Websocket接口
  wip: {
    target: 'http://server.maxiaoqu.com:8888'
  },
  // 文件上传接口
  fip: {
    target: 'http://server.maxiaoqu.com:9999'
  }
}

module.exports = nodeEnv
