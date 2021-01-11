const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/travel-2-website/'
    : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}