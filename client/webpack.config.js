const webpack = require('webpack')
const { resolve } = require('path')

const ManifestPlugin = require('webpack-manifest-plugin')
const webpackConfigLoader = require('react-on-rails/webpackConfigLoader')

const configPath = resolve('..', 'config')
const { manifest, webpackOutputPath, webpackPublicOutputDir } =
  webpackConfigLoader(configPath)

const config = {
  context: resolve(__dirname),

  entry: {
    'main-core': './app/core/registration',
    'vendor': [
      'babel-polyfill',
      'es5-shim/es5-shim',
      'es5-shim/es5-sham',
      'lodash',
      'react',
      'react-dom',
      'react-intl',
      'react-redux',
      'react-router',
      'redux'
    ]
  },

  output: {
    filename: '[name].[hash].js',

    // slashs are necessary
    publicPath: `/${webpackPublicOutputDir}/`,
    path: webpackOutputPath
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      assets: resolve(__dirname, 'app/assets'),
      libs: resolve(__dirname, 'app/libs')
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),

    new webpack.ProvidePlugin({ 'Promise': 'promise-polyfill' }),
    new ManifestPlugin({ fileName: manifest, writeToFileEmit: true })
  ],

  module: {
    rules: [
      {
        test: require.resolve('react'),
        use: {
          loader: 'imports-loader',
          options: {
            shim: 'es5-shim/es5-shim',
            sham: 'es5-shim/es5-sham'
          }
        }
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
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 3
            }
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: './app/assets/styles/app-variables.scss'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
