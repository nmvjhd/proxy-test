/**
 * Created by Administrator on 2017/11/12.
 */
const path = require('path');

module.exports = {
  entry: {
    app: ['./app.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/assets/",
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: 'env',
            }
          }
        ]
      }
    ],
  },
};
