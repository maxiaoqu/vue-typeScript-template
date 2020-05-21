const consoleInfo = require('./console')

module.exports = {
  publicPath: './',
  lintOnSave: process.env.NODE_ENV !== 'production',
  outputDir: process.env.outputDir,
  productionSourceMap: false,
  filenameHashing: false,
  devServer: {
    port: 1024,
    host: 'localhost',
    https: false,
    open: true
  }
}
