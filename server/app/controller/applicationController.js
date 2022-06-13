const { Controller } = require("egg");
const { successRes, failRes } = require("./../utils/helper");
/**
 * @Controller 应用管理（wul）
 */
class ApplicationController extends Controller {
  /**
   * @Summary 获取应用列表
   * @Router get /api/app/list
   * @Request query 类型：string name 应用名称
   *
   */
  async getApplist() {
    const { ctx } = this;
    try {
      const list = await ctx.service.application.getAppList();
      ctx.body = successRes(list);
    } catch (err) {
      ctx.body = failRes(err);
    }
  }
}
module.exports = ApplicationController;
