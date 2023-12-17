const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    port: 3001,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Vishwas"),
    }),
  ],
};
