const Controller = require("egg").Controller;
/**
 * @Controller 页面入口
 */
class AuthController extends Controller {
  async login() {
    const { ctx } = this;
    const info = await ctx.service.auth.login();
    ctx.body = successRes(info);
  }
}

module.exports = AuthController;
