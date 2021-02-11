// vue.config.js
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  devServer: {
      disableHostCheck: true
  },
  configureWebpack:{
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  }
}
