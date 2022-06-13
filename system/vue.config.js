const { name } = require("./package.json");

module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8080,
    headers: {
      // 允许子应用跨域
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把子应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
