/**
 * @param {Egg.Application} app - egg application
 */

module.exports = (app) => {
  const { router, controller } = app;
  router.get("/api/system/list/app", controller.system.index);
  router.post("/api/system/create/app", controller.system.create);
  router.put("/api/system/update/app", controller.system.update);
  router.delete("/api/system/delete/app", controller.system.delete);
};
