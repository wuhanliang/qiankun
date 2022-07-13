const Service = require("egg").Service;
const utils = require("utility");

class AuthService extends Service {
  /**
   * @Dscription 登录业务处理
   * @Author wu
   * @returns
   */
  async login() {
    const { app, ctx } = this;
    const { userName, password } = ctx.request.body;

    return await ctx.model.User.findOne({
      where: {
        userName: userName,
        password: utils.md5(password, "base64"),
      },
    }).then((res) => {
      const token = app.jwt.sign(
        {
          userName: userName,
          password: utils.md5(password, "base64"),
        },
        app.config.jwt.secret
      );
      if (!res) {
        return {
          status: false,
          data: "用户名密码有误！",
          msg: "用户名密码有误！",
        };
      } else {
        ctx.model.User.update({ token }, { where: { id: res.id } });
        delete res.dataValues.password;
        return {
          status: true,
          data: {
            ...res.dataValues,
            token,
            createdAt: ctx.helper.formatDateTime(res.dataValues.createdAt),
            updatedAt: ctx.helper.formatDateTime(res.dataValues.updatedAt),
          },
        };
      }
    });
  }

  async registry() {
    const { app, ctx } = this;
    const body = ctx.request.body;
    return await ctx.model.User.findOne({
      where: {
        userName: body.userName,
      },
    }).then(async (res) => {
      if (!res) {
        const token = app.jwt.sign(
          {
            userName: body.userName,
            password: utils.md5(body.password, "base64"),
          },
          app.config.jwt.secret
        );
        const result = await ctx.model.User.create({
          ...body,
          token,
          password: utils.md5(body.password, "base64"),
        });
        delete result.password;
        return {
          status: true,
          data: {
            ...result,
            createdAt: ctx.helper.formatDateTime(result.createdAt),
            updatedAt: ctx.helper.formatDateTime(result.updatedAt),
          },
          msg: "注册成功！",
        };
      } else {
        return {
          status: false,
          data: null,
          msg: "用户名已经存在",
        };
      }
    });
  }
}

module.exports = AuthService;
