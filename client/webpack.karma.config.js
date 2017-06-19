const baseConfig = require('./webpack.config')

const config = {
  devtool: 'inline-source-map',

  resolve: baseConfig.resolve,
  module: baseConfig.module
}

module.exports = config
