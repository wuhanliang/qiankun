// const Controller = require("egg").Controller;
const BaseController = require("./base");
/**
 * @Controller 用户认证
 */
class AuthController extends BaseController {
  /**
   * @Summary 登录接口（吴）
   * @Router post /api/auth/login
   * @Request body. 类型：string userName 用户名
   * @Request body. 类型：string password 用户密码
   *
   *
   */

  async login() {
    const { ctx } = this;
    try {
      const data = await ctx.service.auth.login();
      this.handleRes(data);
    } catch (err) {
      this.handleRes(err);
    }
  }

  /**
   * @Summary 用户注册（吴）
   * @Router post /api/auth/registry
   * @Request body. 类型：string userName 用户名
   * @Request body. 类型：string password 用户密码
   * @Request body. 类型：string nickName 用户昵称
   *
   */
  async registry() {
    const { ctx } = this;
    try {
      const data = await ctx.service.auth.registry();
      this.handleRes(data);
    } catch (err) {
      this.handleRes(err);
    }
  }
}

module.exports = AuthController;
