const path = require('path');
const webpackConfig = require('./webpack.config.common');
const isProductionBuild = process.env.NODE_ENV === 'production';
const shouldWatch = !isProductionBuild;
const shouldSingleRun = isProductionBuild;

process.env.CHROME_BIN = require('puppeteer').executablePath();
webpackConfig.devtool = 'inline-source-map';
webpackConfig.mode = 'development';

webpackConfig.module.rules.push({
  test: /\.js$/,
  enforce: 'post',
  exclude: [/\.spec.js$/, /node_modules/],
  loader: 'istanbul-instrumenter-loader',
  query: {
    esModules: true
  }
});

module.exports = function (config) {
  const logLevel = isProductionBuild ? config.LOG_DEBUG : config.LOG_INFO;

  config.set({
    basePath: '',
    files: [
      { pattern: './karma-test-shim.js', watched: false }
    ],
    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap']
    },
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-junit-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-webpack'),
      require('karma-sourcemap-loader')
    ],

    webpack: webpackConfig,

    reporters: ['progress', 'dots', 'junit', 'coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: logLevel,
    autoWatch: shouldWatch,
    browsers: ['ChromiumHeadlessConfigured'],
    customLaunchers: {
      ChromiumHeadlessConfigured: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
      }
    },
    singleRun: shouldSingleRun,
    captureTimeout: 210000,
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout: 210000,
    browserNoActivityTimeout: 210000,
    concurrency: Infinity,
    junitReporter: {
      outputDir: './reports/test-results/',
      outputFile: 'test-results.xml',
      suite: 'todo-app',
      useBrowserName: false
    },
    coverageIstanbulReporter: {
      'dir': path.join(__dirname, 'reports'),
      'reports': ['html', 'cobertura', 'text-summary'],
      'report-config': {
        'html': {
          subdir: 'test-coverage'
        },
        'cobertura': {
          file: 'test-coverage/coverage.xml'
        },
        'text-summary': {}
      },
      'fixWebpackSourcePaths': true,
      'remapOptions': {
        exclude: [/\*.spec.ts/]
      },
      'thresholds': {
        emitWarning: false,
        global: {
          statements: 90,
          branches: 80,
          functions: 90,
          lines: 90
        }
      }
    }
  });
};