// Karma configuration
// Generated on Thu Jun 08 2017 11:16:37 GMT-0600 (MDT)

const webpackConfig = require('./webpack.test.config');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // frameworks: ['browserify', 'mocha', 'chai'],
    frameworks: ['intl-shim', 'mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'app/**/__tests__/*.test.jsx', watched: false}
    ],


    // list of files to exclude
    exclude: [
    ],

    webpack: webpackConfig,

    webpackMiddleware: {
        stats: 'errors-only'
    },

    webpackServer: {
        noInfo: true
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'app/**/__tests__/*.test.jsx': ['browserify']
      // 'app/**/__tests__/*.test.jsx': ['webpack', 'sourcemap']
      'app/**/__tests__/*.test.jsx': ['webpack']
    },
    
    // browserify: {
    //   debug: true,
    //   transform: ['babelify']
    // },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
