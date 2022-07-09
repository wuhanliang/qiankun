// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSystem = require('../../../app/model/system');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    System: ReturnType<typeof ExportSystem>;
    User: ReturnType<typeof ExportUser>;
  }
}
