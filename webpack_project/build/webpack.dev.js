const baseConfig = require('./webpack.base');
const webpack = require('webpack');
const merge = require('webpack-merge');

const devConfig = {
  // mode默认是production，但是不写会报warning
  // mode设置development, 代码不会压缩
  mode: 'development',
  devtool: 'cheap-eval-module-source-map',
  devServer: {
    contentBase: '../dist',
    open: true,
    hot: true,
    hotOnly: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true,
  }
};

module.exports = merge(baseConfig, devConfig);