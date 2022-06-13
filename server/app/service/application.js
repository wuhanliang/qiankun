"use strict";
const Service = require("egg").Service;
class ApplicationService extends Service {
  async getAppList() {
    const { app } = this;
    try {
      const result = [
        {
          title: "门户",
          name: "portal",
          entry: "//localhost:8081",
          container: "#container",
          activeRule: "/portal",
        },
        {
          title: "系统管理",
          name: "system",
          entry: "//localhost:8080",
          container: "#container",
          activeRule: "/system",
        },
        {
          title: "考试系统",
          name: "exam",
          entry: "//localhost:8003",
          container: "#container",
          activeRule: "/exam",
        },
      ];
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

module.exports = ApplicationService;
