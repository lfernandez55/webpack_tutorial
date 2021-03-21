const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserJSPlugin = require("terser-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const path = require('path');
module.exports = env => ({
      mode: env.development ? "development" : "production",
      entry: "./src/index.js",
      watch: true,
      output: {
        path: __dirname + "/public",
        publicPath: "/",
        filename: "[name].bundle.js",
      },
      devServer: {
        contentBase: "./dist",
        port: "3001",
      },
      optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
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
        // new HtmlWebpackPlugin({
        //   template: "./public/index.html",
        // }),
        new MiniCssExtractPlugin()
      ]
})