const rules = require('./webpack.rules');

rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"
  }
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
