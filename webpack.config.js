const path = require('path');

module.exports = {
  watch: true,
  devtool: 'source-map',
  entry: './app/index.js',
  output: {
    path:  path._join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
