const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const path = require('path');
module.exports = {
      entry: "./src/index.js",
      output: {
        path: __dirname + "/public",
        publicPath: "/",
        filename: "[name].bundle.js",
      },
      resolve: {
        extensions: [".jsx", ".js", "json"],
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            loader: require.resolve("babel-loader"),
            exclude: /node_modules/,
            // Options for the plugin
            options: {
              presets: [require.resolve("@babel/preset-react")],
            },
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
        new MiniCssExtractPlugin()
      ]
}