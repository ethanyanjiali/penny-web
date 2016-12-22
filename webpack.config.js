var path = require('path');
var webpack = require('webpack');

var appPath = __dirname;
 
module.exports = {
  entry: [
    './scripts/index' // Your appʼs entry point
  ],
  output: { 
  	path: path.join(appPath, 'build'),
    publicPath: '/build/',
  	filename: 'index.js' 
  },
  devtool: 'eval-source-map',
  module: {
  	preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint']
      }
    ],
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['latest', 'react'] }
      },
      {
      	test: /\.scss$/,
		    loaders: ['style', 'css', 'sass']
	    },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]'
        ]
      }
    ]
  },
};