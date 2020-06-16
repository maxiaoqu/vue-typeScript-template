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
