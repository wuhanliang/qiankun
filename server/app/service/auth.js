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
    try {
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
          return "用户名密码有误！";
        } else {
          ctx.model.User.update({ token }, { where: { id: res.id } });
          delete res.dataValues.password;
          return {
            ...res.dataValues,
            token,
          };
        }
      });
    } catch (err) {
      return err;
    }
  }

  async registry() {
    const { app, ctx } = this;
    try {
      const body = ctx.request.body;
      return await ctx.model.User.findOne({
        where: {
          userName: body.userName,
        },
      }).then((res) => {
        if (!res) {
          const token = app.jwt.sign(
            {
              userName: body.userName,
              password: utils.md5(body.password, "base64"),
            },
            app.config.jwt.secret
          );
          const result = ctx.model.User.create({
            ...body,
            token,
            password: utils.md5(body.password, "base64"),
          });
          delete result.password;
          return result;
        } else {
          return "用户名已存在";
        }
      });
    } catch (err) {}
  }
}

module.exports = AuthService;
