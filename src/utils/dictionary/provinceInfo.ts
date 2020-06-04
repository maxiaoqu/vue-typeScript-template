import provinceInfo from '@/dictionary/provinceInfo'

export const getProvinceName = (areaCode: string, isFull: boolean) => {
  let name = ''
  provinceInfo.forEach(item => {
    if (item.areaCode === areaCode && isFull) {
      name = item.fullName
    } else if (item.areaCode === areaCode && !isFull) {
      name = item.provinceName
    }
  })
  return name
}
