const Service = require("egg").Service;

class SystemService extends Service {
  constructor(x) {
    super(x);
    this.$system = this.ctx.model.System;
  }
  async index() {
    const { ctx, app } = this;
    const { pageNum, pageSize, parentId = 0 } = ctx.request.query;

    const list = await this.app.mysql.query(
      `SELECT * FROM systems WHERE parent_id = ${parentId} LIMIT ${
        (pageNum - 1) * pageSize
      }, ${pageSize} `
    );
    const [total] = await this.app.mysql.query(
      `SELECT COUNT(*) AS count FROM systems WHERE parent_id = ${parentId}`
    );

    return {
      status: true,
      data: {
        pageNum,
        pageSize,
        rows: list.map((item) => {
          return {
            ...item,
            createdAt: ctx.helper.formatDateTime(item.createdAt),
            updatedAt: ctx.helper.formatDateTime(item.updatedAt),
          };
        }),
        total: total.count,
      },
    };
  }
  async create() {
    const { ctx, app } = this;
    const body = ctx.request.body;
    return await this.$system
      .findOne({
        where: {
          name: body.name,
        },
      })
      .then(async (res) => {
        if (!res) {
          const result = await this.$system.create(body);
          return {
            status: true,
            data: {
              ...result,
              createdAt: ctx.helper.formatDateTime(result.createdAt),
              updatedAt: ctx.helper.formatDateTime(result.updatedAt),
            },
            msg: "新增成功！",
          };
        } else {
          return {
            status: false,
            data: null,
            msg: "系统名称已存在！请修改！",
          };
        }
      });
  }

  async update() {
    const { ctx, app } = this;
    const body = ctx.request.body;
    const res = await this.$system.update(body, { where: { id: body.id } });
    if (res) {
      return {
        status: true,
        data: "编辑成功！",
        msg: "编辑成功！",
      };
    } else {
      return {
        status: false,
        data: null,
        msg: "编辑失败！请稍后重试！",
      };
    }
  }
}

module.exports = SystemService;
