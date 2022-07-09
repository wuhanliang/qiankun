"use strict";

const Controller = require("egg").Controller;
/**
 * @Controller 主页入口
 *
 */
class HomeController extends Controller {
  /**
   * @Summary Home
   * @Router get /api/home
   *
   */
  async index() {
    const { ctx } = this;
    ctx.body = "hello world"; //ender("index.html", { lists: ["苹果", "香蕉", "西瓜"] });
  }
}

module.exports = HomeController;
