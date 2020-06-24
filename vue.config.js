const consoleInfo = require('./console')
const isProduction = process.env.NODE_ENV === 'production'
const CopyWebpackPlugin = require('copy-webpack-plugin')
const nodeEvnt = require('./src/environment/nodeEvnt.ts')

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
            rootValue: 16,
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
    port: nodeEvnt.port,
    host: '0.0.0.0',
    https: false,
    open: true,
    proxy: {
      // 通配【勿动,模拟配置，为了方便联调时的更多的配置】
      '/maxiaoquServer': {
        target: 'http://server.maxiaoqu.com/maxiaoquServer',
        changeOrigin: true,
        pathRewrite: {
          '/maxiaoquServer': '/'
        }
      },

      // 联调时的跨域【可进行增加和修改】
      '/userCenter': nodeEvnt.dip,

      // 通用统一验证跨域【只可改IP】
      '/api': nodeEvnt.dip
    }
  }
}
