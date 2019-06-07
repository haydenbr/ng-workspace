const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            "VERSION": JSON.stringify("4711")
        })
  ],
  output: {
    path: path.join(__dirname, './temp'),
    futureEmitAssets: false
  },
  plugins: [
    new WriteFilePlugin({
      test: /\.(js|html)$/,
      // force: true,
    })
  ],
}
