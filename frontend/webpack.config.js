const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = __dirname + '/src';
const DIST_DIR = __dirname + '/dist';

module.exports = {
  entry: [
    SRC_DIR + '/index.jsx',
  ],
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: { minimize: true },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: SRC_DIR + '/index.html',
      filename: './index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_ENDPOINT: JSON.stringify(process.env.API_ENDPOINT)
      }
    })
  ],
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    port: 3000,
  },
};
