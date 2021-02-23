const path = require('path');
const express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');

// webpack-dev-middleware setup
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

const app = express();
app.use(
  WebpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  }),
);

// Express functionality
const port = 8080;

app.use(
  express.static('build'),
);

app.get('/', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, './src/index.html'),
  );
});

app.listen(port);
