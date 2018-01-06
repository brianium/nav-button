const path = require("path");

module.exports = {
  entry: "./src/index",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "nav-button.js",
    libraryTarget: "umd",
    library: "navButton"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },

      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")()]
            }
          },
          "sass-loader"
        ]
      }
    ]
  },

  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],

    extensions: [".js", ".scss"]
  },

  devtool: "eval-source-map",

  target: "web",

  devServer: {
    port: 9000,
    open: true,
    openPage: "/dev"
  }
};
