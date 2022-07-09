/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1654832905198_2814";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security: {
      csrf: {
        enable: false,
        ignoreJSON: true,
      },
      domainWhiteList: ["http://localhost:8080"],
    },
    cors: {
      origin: "*",
      allowMethods: "GET, PUT, POST, DELETE, PATCH",
    },

    swaggerdoc: {
      dirScanner: "./app/controller", //插件扫描的文档路径
      apiInfo: {
        title: "egg-swagger",
        description: "swagger-ui for egg",
        version: "1.0.0",
      },
      schemes: ["http", "https"],
      consumes: ["application/json"],
      produces: ["application/json"],
      enableSecurity: false,
      // enableValidate: true,
      routerMap: false,
      enable: true,
    },
    // mysql: {
    //   client: {
    //     host: "localhost",
    //     port: "3306",
    //     user: "root",
    //     password: "abc123QQQ",
    //     database: "late",
    //   },
    //   app: true,
    //   agent: false,
    // },
    view: {
      mapping: {
        ".html": "ejs",
      },
    },
    jwt: {
      secret: "123456",
    },
    sequelize: {
      dialect: "mysql", // support: mysql, mariadb, postgres, mssql
      database: "late", //数据库名
      host: "localhost",
      port: "3306",
      username: "root", //账号
      password: "abc123QQQ", //密码
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
