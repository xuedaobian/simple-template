const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: __dirname + "/src/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [{
          loader: "css-loader", options: {
            modules: {
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            }
          },
        }, "postcss-loader", "sass-loader"],
      },
    ]
  }
}