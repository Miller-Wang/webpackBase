const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlubin = require("clean-webpack-plugin").CleanWebpackPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[hash:5].js",
    publicPath: "/",
  },

  devServer: {
    host: "localhost",
    port: 7500,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        // pathRewrite: { "^/api": "/" },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024 * 8,
            outputPath: "images",
            publicPath: "/images",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlubin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      options: {
        publicPath: "/",
      },
    }),
  ],
};
