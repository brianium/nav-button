const path = require("path");

module.exports = {
  entry: "./src/index",

  output: {
    path: path.resolve(__dirname, "lib"),
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
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")()]
            }
          }
        ]
      }
    ]
  },

  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],

    extensions: [".js", ".css"]
  },

  devtool: "eval-source-map",

  target: "web",

  devServer: {
    port: 9000,
    open: true,
    openPage: "/dev"
  }
};
