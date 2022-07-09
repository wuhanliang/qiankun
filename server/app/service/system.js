const Service = require("egg").Service;

class SystemService extends Service {
  constructor(x) {
    super(x);
    this.$system = this.ctx.model.System;
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
