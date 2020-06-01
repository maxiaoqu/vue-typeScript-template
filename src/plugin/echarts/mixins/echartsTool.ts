import Echarts from 'echarts'

export const getEchartsTool = (toolName) => {
  let echartsTool = Echarts
  if (toolName) {
    echartsTool = Echarts[toolName]
  }
  return echartsTool
}
