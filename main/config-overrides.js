const { name } = require("./package.json");
module.exports = {
  webpack: (config) => {
    // config.output.library = `${name}-[name]`;
    // config.output.libraryTarget = "umd";
    // // config.output.jsonpFunction = `webpackJsonp_${name}`;
    // config.output.globalObject = "window";
    // // config.output.publicPath =
    // //   process.env.NODE_ENV === "development" ? `//localhost:8003/` : "/";
    // config.output.publicPath = `http://localhost:8003/`;
    return config;
  },

  devServer: (config) => {
    // const config = _;

    // config.headers = {
    //   "Access-Control-Allow-Origin": "*",
    // };
    // config.historyApiFallback = true;
    // config.hot = false;
    // config.watchContentBase = false;
    // config.liveReload = false;

    return config;
  },
};
