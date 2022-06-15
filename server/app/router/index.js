"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/api/app/list", controller.appController.getApplist);
  router.post(
    "/api/app/createOrUpdate",
    controller.appController.createOrUpdate
  );
};
