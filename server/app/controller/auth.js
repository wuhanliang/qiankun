const Controller = require("egg").Controller;
/**
 * @Controller 用户认证
 */
class AuthController extends Controller {
  /**
   * @Summary Summary
   * @Router post /api/auth/login
   * @Request body. 类型：string userName 用户名
   * @Request body. 类型：string password 用户密码
   *
   */

  async login() {
    const { ctx, app } = this;
    const list = await ctx.service.auth.login();
    ctx.body = list;
  }

  /**
   * @Summary 用户注册
   * @Router post /api/auth/registry
   * @Request body. 类型：string userName 用户名
   * @Request body. 类型：string password 用户密码
   * @Request body. 类型：string nickName 用户昵称
   *
   */
  async registry() {
    const { ctx } = this;

    const list = await ctx.service.auth.registry();
    ctx.body = list;
  }
}

module.exports = AuthController;
