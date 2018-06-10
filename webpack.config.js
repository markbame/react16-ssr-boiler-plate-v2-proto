var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

var browserConfig = {
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve('./src/app'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}

var serverConfig = {
  entry: ['babel-polyfill', './src/server/index.js'],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve('./src/app'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]
