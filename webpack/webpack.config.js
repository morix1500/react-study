const webpack = require("webpack");
const path = require('path');

module.exports = {
  watch: true,
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ["react", "env"]
          }
        }]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: {} })
  ]
};
