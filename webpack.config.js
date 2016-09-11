const path = require('path');

module.exports = {
  entry: {
    main: "./index.js",
    // test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css']
  }
};

var sass    = require('node-sass');
var neat = require('node-neat');

sass.render({
  file: './styles.scss',
  success: function(css){
    console.log(css);
  },
  error: function(error) {
    console.log(error);
  },
  // includePaths: neat.with('other/path', 'another/path'),
  // - or -
  includePaths: neat.includePaths,
  outputStyle: 'compressed'
});
