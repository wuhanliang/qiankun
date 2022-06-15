"use strict";

const helper = require("../extend/helper");

const Service = require("egg").Service;
const moment = require("moment");

class ApplicationService extends Service {
  async getAppList() {
    const { app, ctx } = this;
    const query = ctx.query;
    const { parentId, status = 1 } = query;
    try {
      const appList = await app.mysql.select("apps", {
        where: { parent_id: parentId, status },
      });
      return appList.map((item) => {
        return {
          ...item,
          create_time: helper.formatDateTime(item.create_time),
          update_time: helper.formatDateTime(item.update_time),
        };
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async createOrUpdate() {
    const { app, ctx } = this;
    const { name, activeRule, container, entry, id, parentId, create_time } =
      ctx.request.body;
    const row = {
      name,
      activeRule,
      container,
      entry,
      id,
      parent_id: parentId,
      update_time: helper.formatDateTime(moment()),
      create_time: helper.formatDateTime(create_time),
    };
    if (id) {
      try {
        await app.mysql.update("apps", row);
        return "更新成功";
      } catch (error) {
        return "更新失败！ 请重试";
      }
    } else {
      try {
        await app.mysql.insert("apps", row);
        return "创建成功";
      } catch (error) {
        return "创建失败！ 请重试";
      }
    }
  }
}

module.exports = ApplicationService;
