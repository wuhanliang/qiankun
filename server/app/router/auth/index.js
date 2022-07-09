/**
 * @param {Egg.Application} app - egg application
 */

module.exports = (app) => {
  const { router, controller } = app;
  router.post("/api/auth/login", controller.auth.login);
  router.post("/api/auth/registry", controller.auth.registry);
};
