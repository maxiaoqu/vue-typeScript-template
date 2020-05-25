const consoleInfo = require('./console')

module.exports = {
  publicPath: './',
  lintOnSave: process.env.NODE_ENV !== 'production',
  outputDir: process.env.outputDir,
  productionSourceMap: false,
  filenameHashing: false,
  // 添加打包分析工具,使用方法：npm run build --report
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
        config.plugins.delete('prefetch')
      }
    }
  },
  // 使用postcss-pxtorem配合utils/rem将项目中的px转化成rem
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5,
            selectorBlackList: [],
            propList: ['*'],
            replace: true,
            mediaQuery: true,
            minPixelValue: 3
          })
        ]
      }
    }
  },
  devServer: {
    port: 1024,
    host: 'localhost',
    https: false,
    open: true
  }
}
