const consoleInfo = require('./console')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const nodeEvnt = require('./src/environment/nodeEvnt.ts')
const nodeEnvPort = nodeEvnt.port

module.exports = {
  publicPath: './',
  lintOnSave: false,
  outputDir: process.env.outputDir,
  productionSourceMap: false,
  filenameHashing: false,
  // 通过链式编程的形式，来修改默认的 webpack 配置
  chainWebpack: config => {
    // 生产环境配置
    if (isProduction) {
      // 添加打包分析工具,使用方法：npm run build --report
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
        config.plugins.delete('prefetch')
      }
      // 删除预加载
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      // 压缩代码
      config.optimization.minimize(true)
      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all'
      })
    }
  },
  // 通过操作对象的形式，来修改默认的 webpack 配置
  configureWebpack: config => {
    // 添加打包迁移工具
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [{
          from: './static',
          to: 'static'
        }]
      })
    )
    // 生产环境配置
    // if (isProduction) {}
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
    port: nodeEnvPort,
    host: 'localhost',
    https: false,
    open: true
  }
}
