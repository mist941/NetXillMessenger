const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let isDevMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './client/index',
  mode: isDevMode ? 'development' : 'production',
  devtool: isDevMode ? 'source-map' : false,
  target: isDevMode ? 'web' : 'browserslist',

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: !isDevMode ? [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ] : [],
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images',
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/fonts'
        }
      }
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'client/favicon.ico',
          to: ''
        }
      ]
    }),
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  devServer: {
    contentBase: './dist',
    hot: isDevMode,
    open: true,
  }
}