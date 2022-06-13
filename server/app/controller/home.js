"use strict";

const Controller = require("egg").Controller;
/**
 * @Controller 页面入口
 */
class HomeController extends Controller {
  /**
   * @Swagger
   * @Router get /test
   */
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
}

module.exports = HomeController;
