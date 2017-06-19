const { resolve } = require('path')
const baseConfig = require('./webpack.config')

baseConfig.module.rules.unshift({
  test: /^(?!.*test\.jsx?$).*\.jsx?$/i,
  include: resolve('app/bundle'),
  loader: 'istanbul-instrumenter-loader'
})

const config = {
  devtool: 'inline-source-map',

  resolve: baseConfig.resolve,
  module: baseConfig.module
}

module.exports = config
