const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-console.js', // 修改下输出的名称
    library: 'MyConsole',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ],
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
