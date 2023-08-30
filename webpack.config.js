var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PugPlugin = require('pug-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

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
    new ESLintPlugin({fix: true}),
  ],
  module: {
    rules: [
      {
        test : /.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
                esModule: true,
            },
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.pug$/,
        use: PugPlugin.loader
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