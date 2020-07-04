import baseURL from '../../environment/baseUrl'

const webSocket = (() => {
  let defaultConfig = baseURL.wip

  const webSocketServer = (config) => {
    defaultConfig.ip = config.ip && config.ip.trim() !== '' ? config.ip : defaultConfig.ip
    defaultConfig.port = config.port && config.port.trim() !== '' ? config.port : defaultConfig.port
    defaultConfig.uri = config.uri && config.uri.trim() !== '' ? config.uri : defaultConfig.uri
  }

  webSocketServer.prototype.init = () => {
    let _this = this
    let host = ''
    let protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://'
    if (protocol === 'wss://') {
      host = protocol + defaultConfig.ip + defaultConfig.port + defaultConfig.uri
    } else if (protocol === 'ws://') {
      host = protocol + defaultConfig.ip + ':' + defaultConfig.port + defaultConfig.uri
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket

    if (!window.WebSocket) { // 检测浏览器支持
      _this.error('Error: WebSocket is not supported .')
      return
    }

    _this.socket = new WebSocket(host) // 创建连接并注册响应函数
    _this.socket.onopen = () => {
      _this.onopen()
    }
    _this.socket.onmessage = (message) => {
      _this.onmessage(message)
    }
    _this.socket.onclose = (event) => {
      _this.onclose(event)
      _this.socket = null // 清理
    }
    _this.socket.onerror = (errorMsg) => {
      _this.onerror(errorMsg)
    }
  }

  /**
   * 打开链接回调
   */
  webSocketServer.prototype.onopen = () => {
    console.log('打开链接回调')
  }

  /**
   * 关闭链接回调
   */
  webSocketServer.prototype.onclose = (e) => {
    console.log('websocket 断开: ' + e.code + ' ' + e.reason + ' ' + e.wasClean)
    console.log('关闭链接回调')
  }

  /**
   * 消息获取回调
   * @param {Object} message
   */
  webSocketServer.prototype.onmessage = (message) => {
    console.log('消息获取回调')
  }

  /**
   * 消息发送回调
   * @param {Object} message
   */
  webSocketServer.prototype.send = (message) => {
    let _this = this
    if (_this.socket) {
      _this.socket.send(message)
      return true
    }
    _this.error('请先连接到服务器 !!!')
    return false
  }

  /**
   * 自定义异常函数
   * @param {Object} errorMsg
   */
  webSocketServer.prototype.error = (errorMsg) => {
    this.onerror(errorMsg)
  }

  /**
   * 异常链接回调
   */
  webSocketServer.prototype.onerror = () => {
    console.log('异常链接回调')
  }
  return webSocketServer
})()

export { webSocket }
