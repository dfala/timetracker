var path = require('path');

module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'},
      {test: path.join(__dirname, 'app'), loader: 'babel-loader'}
    ]
  }
};