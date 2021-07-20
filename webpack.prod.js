const { merge } = require('webpack-merge')
const common = require('./webpack.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const maxBundleBytesSize = 2048 * 1024

module.exports = merge(common, {
  mode: 'production',
  performance: {
    hints: 'error',
    maxEntrypointSize: maxBundleBytesSize,
    maxAssetSize: maxBundleBytesSize,
  },
  plugins: [new CleanWebpackPlugin({ watch: true })],
})
