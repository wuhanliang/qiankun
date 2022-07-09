"use strict";

const Controller = require("egg").Controller;
/**
 * @Controller 主页入口
 *
 */
class HomeController extends Controller {
  /**
   * @Summary 系统主页
   * @Description 默认返回系统门户导航页面
   * @Router get /
   *
   */
  async index() {
    const { ctx } = this;
    await ctx.render("index.html", { lists: ["苹果", "香蕉", "西瓜"] });
  }
}

module.exports = HomeController;
