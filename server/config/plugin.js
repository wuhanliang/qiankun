"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  ejs: {
    enable: true,
    package: "egg-view-ejs",
  },
  cors: {
    enable: true,
    package: "egg-cors",
  },
  swaggerdoc: {
    enable: true,
    package: "egg-swagger-doc",
  },
  mysql: {
    enable: true,
    package: "egg-mysql",
  },
  mongoose: {
    enable: true,
    package: "egg-mongoose",
  },
};
