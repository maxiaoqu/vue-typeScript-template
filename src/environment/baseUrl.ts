import { isProduction } from '@/environment/process'

// 运行环境【运行后台人员联调环境】----【运行：npm run dev】
const development = {
  dip: 'http://168.168.168.168:6666', // 数据接口
  pip: 'http://168.168.168.168:7777', // ddPush推送接口
  wip: 'http://168.168.168.168:8888', // Websocket接口
  fip: 'http://168.168.168.168:9999' // 文件上传接口
}

// 打包环境【线上环境】----【打包：npm run build】
const production = {
  dip: 'http://server.maxiaoqu.com:6666', // 数据接口
  pip: 'http://server.maxiaoqu.com:7777', // ddPush推送接口
  wip: 'http://server.maxiaoqu.com:8888', // Websocket接口
  fip: 'http://server.maxiaoqu.com:9999' // 文件上传接口
}

const baseURL = isProduction ? production : development

export default baseURL
