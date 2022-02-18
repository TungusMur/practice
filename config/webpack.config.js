const path = require('path');
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src') + '/index.jsx'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
    // filename: 'index_bundle.js',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  plugins: [
    new HTMLWebpackPlugin({ template: path.resolve(__dirname, '../src') + '/index.html', filename: 'index.html' }),
    // new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
};
