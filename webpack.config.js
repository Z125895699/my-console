const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-console.js', // 修改下输出的名称
    library: 'MyConsole',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
  }
};
