// 忽略.vue文件导入包时需要提示的错误
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// 忽略.gif文件导入包时需要提示的错误
declare module '*.gif' {
  export const gif: any
}

// 忽略.png文件导入包时需要提示的错误
declare module '*.png' {
  export const png: any
}

// 忽略.json文件导入包时需要提示的错误
declare module '*.jpg' {
  export const jpg: any
}

// 忽略.json文件导入包时需要提示的错误
declare module '*.json' {
  export const json: any
}

// 忽略.ts文件导入包时需要提示的错误
declare module '*.ts' {
  export const ts: any
}
