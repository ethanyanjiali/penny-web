var path = require('path');
var webpack = require('webpack');

var appPath = __dirname;

module.exports = {
  mode: 'development',
  entry: [
    'whatwg-fetch',
    './scripts/index', // Your appʼs entry point
  ],
  output: {
    path: path.join(appPath, 'build'),
    publicPath: '/build/',
    filename: 'index.js',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
          // {
          //   loader: 'eslint-loader',
          //   options: {
          //     quiet: true,
          //   },
          // },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};
