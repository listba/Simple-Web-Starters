var path = require('path');

var config = {
  //context: path.join(__dirname, 'reactsrc'),
  entry: [
    './reactsrc/main.js',
    './less/main.less',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      { 
        test: /\.less$/,
        loader: "style!css!autoprefixer!less"
      },
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
module.exports = config;