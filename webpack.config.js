var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/app');

var config = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : path.join(__dirname, 'client/app'),
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;