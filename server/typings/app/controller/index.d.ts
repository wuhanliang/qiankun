// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAppController = require('../../../app/controller/appController');
import ExportHome = require('../../../app/controller/home');

declare module 'egg' {
  interface IController {
    appController: ExportAppController;
    home: ExportHome;
  }
}
