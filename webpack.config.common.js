const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');

const appPath = __dirname;

function getRevision() {
  const sha = childProcess.execSync('git rev-parse HEAD', { encoding: 'utf8', timeout: 1000 }) || 'NO_COMMIT_FOUND';
  return sha.trim().substring(0, 8);
}

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
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      REVISION: `"${getRevision()}"`,
    }),
  ],
};
