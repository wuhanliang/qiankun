const { Controller } = require("egg");
const { successRes, failRes } = require("../utils/helper");
/**
 * @Controller 应用管理（wul）
 */
class AppController extends Controller {
  /**
   * @Summary 获取应用列表
   * @Router get /api/app/list
   * @Request query 类型：string name 应用名称
   * @Request query 类型：string parentId 上级应用id
   *
   */
  async getApplist() {
    const { ctx } = this;
    try {
      const list = await ctx.service.appService.getAppList();
      ctx.body = successRes(list);
    } catch (err) {
      ctx.body = failRes(err);
    }
  }
  /**
   * @Summary 新增和编辑
   * @Router post /api/app/list
   * @Request body. 类型：string name 应用名称
   * @Request body. 类型：string parentId 上级应用id
   *
   */
  async createOrUpdate() {
    const { ctx } = this;
    try {
      const list = await ctx.service.appService.createOrUpdate();
      ctx.body = successRes(list);
    } catch (err) {
      ctx.body = failRes(err);
    }
  }
}
module.exports = AppController;
