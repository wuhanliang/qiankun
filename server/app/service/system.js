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
      `SELECT COUNT(*) AS count FROM systems`
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
    const { ctx } = this;
    try {
      const body = ctx.request.body;
      const result = this.$system.create({
        name: "system",
        container: "container",
        entry: "localhost",
        type: "vue",
      });
      return result;
      // return this.$system
      //   .findOne({
      //     where: {
      //       name: body.name,
      //     },
      //   })
      //   .then((res) => {
      //     if (!res) {
      //       const result = this.$system.create(body);
      //       return result;
      //     } else {
      //       return "应用已经存在";
      //     }
      //   });
    } catch (err) {
      return err;
    }
  }
}

module.exports = SystemService;
