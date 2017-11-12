/**
 * Created by Administrator on 2017/11/12.
 */
const config = require('./webpack.config');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  contentBase: 'dist',
  publicPath: '/assets/',
  proxy: {
    "/common/tv/*": {
      target: 'http://localhost:9000',
      pathRewrite: {
        '/common/tv': '',
      }
    },
  }
});
server.listen(8080);
