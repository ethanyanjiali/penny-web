var path = require('path');
var webpack = require('webpack');

var appPath = __dirname;

module.exports = {
  entry: [
    'whatwg-fetch',
    './scripts/index', // Your appʼs entry point
  ],
  output: {
    path: path.join(appPath, 'build'),
    publicPath: '/',
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
