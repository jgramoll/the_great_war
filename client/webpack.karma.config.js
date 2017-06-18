const { resolve } = require('path')

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      libs: resolve(__dirname, 'app/libs')
    }
  },

  module: {
    rules: [
      {
        test: /^(?!.*test\.jsx?$).*\.jsx?$/i,
        include: resolve('app/bundle'),
        loader: 'istanbul-instrumenter-loader'
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
}
