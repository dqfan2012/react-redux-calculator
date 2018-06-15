const { resolve } = require("path");

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.html$/,
        use: [ 'html-loader' ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  output: {
    path: resolve(__dirname, "dist")
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: resolve(__dirname, "dist")
  }
};
