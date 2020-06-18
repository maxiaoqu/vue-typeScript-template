// 创建数据类型

/*
* 动态创建、初始长度为num的数组，初始值为data的数组
* @param num:数组的长度，默认为1
* @param data:数组的初始值，默认为''
* */
export const newBuiltArray = (num: number, data: any) => {
  let arrLength = num || 1
  Array(arrLength).join(',').split(',').map(() => {
    return data || ''
  })
}
