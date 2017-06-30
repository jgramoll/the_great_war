const webpack = require('webpack')
const config = require('./webpack.config')

const scssRule = config.module.rules[2]
scssRule.use[1].options.localIdentName = '[local]'

config.devtool = 'eval-source-map'
config.plugins.push(
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
    DEBUG: false
  }
))

module.exports = config
