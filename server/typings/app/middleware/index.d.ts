// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDefault = require('../../../app/middleware/default');

declare module 'egg' {
  interface IMiddleware {
    default: typeof ExportDefault;
  }
}
