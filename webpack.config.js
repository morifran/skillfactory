var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve (__dirname, 'index.js'),
  output: {
  path: path.resolve (__dirname, 'output'),
  filename: 'main.js',
  },
  mode:'development',
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({template: './index.pug'}),
  ],
  module: {
    rules: [
      {test : /.s?css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']},
      {
        test: /\.pug$/,
			  loader: 'pug-loader',
				options: {
				pretty: true
				},
      },
    ],
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};