const Controller = require("egg").Controller;

const AjaxRes = require("./../utils/axjxRes");
/**
 * @Controller 基类
 */
class BaseController extends Controller {
  async successRes(data) {
    const { ctx } = this;
    ctx.body = await AjaxRes.successRes(data);
  }

  async failRes(err) {
    const { ctx } = this;

    ctx.body = await AjaxRes.failRes(err);
  }

  async handleRes(data) {
    if (data.status) {
      this.successRes(data);
    } else {
      this.failRes(data);
    }
  }
}

module.exports = BaseController;
