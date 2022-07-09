// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth = require('../../../app/controller/auth');
import ExportHome = require('../../../app/controller/home');
import ExportSystem = require('../../../app/controller/system');

declare module 'egg' {
  interface IController {
    auth: ExportAuth;
    home: ExportHome;
    system: ExportSystem;
  }
}
