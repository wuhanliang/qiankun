"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  // 引入模块路由
  require("./auth/index.js")(app);

  const { router, controller } = app;
  router.get("/", controller.home.index);
};
