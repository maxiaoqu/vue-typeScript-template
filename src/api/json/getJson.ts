import { getRequestData } from '@plugins/axios'

// 获取数据
export const getGuiZhouGeoJson = () => {
  return new Promise((resolve, reject) => {
    return getRequestData('../../../../static/json/guiZhouAll.json', 'get', {}).then(res => {
      resolve(res)
    }).then(err => {
      reject(err)
    })
  })
}
