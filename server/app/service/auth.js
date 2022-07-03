"use strict";

const Service = require("egg").Service;
const moment = require("moment");

class AuthService extends Service {
  async login() {
    const { app, ctx } = this;
    return "登录成功";
  }
}

module.exports = AuthService;
