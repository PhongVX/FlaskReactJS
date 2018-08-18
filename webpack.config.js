var webpack = require('webpack');

var VENDOR_LIBS = [
    "react",
    "react-dom",
    "redux",
    "react-redux"
]
module.exports = {
  entry: {
    bundle:"./client/app.js",
    vendor: VENDOR_LIBS
  },
  output: {
    path: __dirname + '/app/static',
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader'}
    ]
  },
  plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})
  ]
};
