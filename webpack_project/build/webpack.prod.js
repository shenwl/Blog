const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
};

module.exports = merge(baseConfig, prodConfig);
