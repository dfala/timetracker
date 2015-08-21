var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./app/entry.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'jsx-loader'
      },
      {
        test: path.join(__dirname, 'app'),
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ],
    plugins: [
      new ExtractTextPlugin("public/app.css")
   ]
  }
};


// {test: /\.css$/, loader: "style-loader!css-loader"},