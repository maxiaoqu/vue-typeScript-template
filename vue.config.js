const consoleInfo = require('./console')
const isProduction = process.env.NODE_ENV === 'production'
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const nodeEvnt = require('./src/environment/nodeEvnt.ts')
const path = require('path')

// 配置webpack目录别名alias
function resolve(dir) {
  return path.resolve(__dirname, dir)
  // return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  lintOnSave: false,
  outputDir: process.env.outputDir,
  productionSourceMap: false,
  filenameHashing: false,
  // 通过链式编程的形式，来修改默认的 webpack 配置
  chainWebpack: config => {
    // 配置webpack目录别名alias
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@dictionary', resolve('src/dictionary'))
      .set('@environment', resolve('src/environment'))
      .set('@plugins', resolve('src/plugins'))
      .set('@utils', resolve('src/utils'))
    // 修复HMR
    config.resolve.symlinks(true)
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
    if (isProduction) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log']
            }
          }
        })
      )
    }
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
