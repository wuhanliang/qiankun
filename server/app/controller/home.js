"use strict";

const Controller = require("egg").Controller;
/**
 * @Controller 页面入口
 */
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("index.html", { lists: ["苹果", "香蕉", "西瓜"] });
  }
}

module.exports = HomeController;
