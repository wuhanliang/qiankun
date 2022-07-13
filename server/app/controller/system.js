const BaseController = require("./base");
/**
 * @Controller 系统管理
 */
class SystemController extends BaseController {
  /**
   * @Summary 列表查询页面
   * @Router get /api/system/list/app
   * @Request query 类型：string pageNum 当前页
   * @Request query 类型：string pageSize 分页大小
   * @Request query 类型：string name 分页大小
   *
   */
  async index() {
    const { ctx } = this;
    try {
      const data = await ctx.service.system.index();
      this.handleRes(data);
    } catch (err) {
      this.handleRes(err);
    }
  }

  /**
   * @Summary 新增应用
   * @Router post /api/system/create/app
   * @Request body. 类型：string name 应用名称
   * @Request body. 类型：string container 渲染容器（默认#container）
   * @Request body. 类型：string parent_id 父项目id
   * @Request body. 类型：string entry 子项目域名
   * @Request body. 类型：string type 子应用类型【'vue','react','angler'】
   *
   */
  async create() {
    const { ctx } = this;
    const list = await ctx.service.system.create();
    ctx.body = list;
  }

  /**
   * @Summary 修改应用配置（吴）
   * @Router PUT /api/system/update/app
   * @Request body. 类型：string name 应用名称
   * @Request body. 类型：string container 渲染容器（默认#container）
   * @Request body. 类型：string parent_id 父项目id
   * @Request body. 类型：string entry 子项目域名
   *
   */
  async update() {}

  /**
   * @Summary 状态删除应用
   * @Router DELETE /api/system/delete/app
   * @Request body. 类型：string id 单个删除
   * @Request body. 类型：string listIds 多个删除
   *
   */
  async delete() {}
}

module.exports = SystemController;
