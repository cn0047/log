const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: [
    './src/front/js/app.js',
    './src/front/js/configs/main.js',
    './src/front/js/events/index.js',
    './src/front/js/services/renderJson.js',
    './src/front/js/sockets/index.js',
  ],
  output: {
    path: path.resolve('public/'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({ filename: '[name].css' }),
  ],
};
