var webpack = require('webpack');
var path = require('path');

module.exports = {

  devtool: 'eval',

  entry: {
    example: './index'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/assets/'
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ],

  resolve: {

    alias: {
      'redux-history-transitions/lib': path.join(__dirname, '..', 'src'),
      'redux-history-transitions': path.join(__dirname, '..', 'src'),
    },

    extensions: ['', '.js']

  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?plugins=babel-plugin-object-assign'],
      exclude: /node_modules/
    }]
  }
};
