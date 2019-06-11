const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, '..', '..', 'dist', 'learner'),
    futureEmitAssets: false
  },
  devServer: {
    writeToDisk: true
  }
}
