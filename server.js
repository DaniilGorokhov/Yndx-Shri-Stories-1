// const path = require('path');
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

app.set('view engine', 'ejs');
app.set('views', './src/templates');

app.use(
  express.static('build'),
);

app.get('/', (req, res) => {
  // res.sendFile(
  // path.resolve(__dirname, './src/index.html'),
  // );

  // Query params may be gained via req.query.<query_param_name>
  res.render('index', { theme: req.query.theme });
});

app.listen(port);
