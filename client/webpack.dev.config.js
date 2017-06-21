const webpack = require('webpack')
const config = require('./webpack.config')

config.devtool = 'eval-source-map'
config.plugins.push(
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
    DEBUG: false
  }
))

module.exports = config
