var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
const PORT = process.env.PORT || 3000;

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:' + PORT);
})
