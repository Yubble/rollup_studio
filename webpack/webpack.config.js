const path = require('path')

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, '../webpackDist'),
    filename: 'webpack_bundle.js'
  }
}