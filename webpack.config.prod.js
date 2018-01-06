const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const base = require("./webpack.config.js");

const extract = new ExtractTextPlugin({
  filename: "nav-button.css",
  allChunks: true,
  ignoreOrder: true
});

module.exports = {
  entry: base.entry,

  output: base.output,

  module: {
    rules: [
      // use the same rule for JS
      base.module.rules[0],

      // we need to extract compiled scss
      {
        test: /\.scss$/,
        use: extract.extract([
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")()]
            }
          },
          "sass-loader"
        ])
      }
    ]
  },

  resolve: base.resolve,

  target: "web",

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    extract
  ]
};
