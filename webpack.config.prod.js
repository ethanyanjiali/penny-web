const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.common.js');

module.exports = merge(
  common,
  {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './index.html',
        filename: 'index.html',
        minify: true,
        hash: true,
      }),
    ],
  },
);
