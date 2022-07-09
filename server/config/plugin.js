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
  jwt: {
    enable: true,
    package: "egg-jwt",
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
  sequelize: {
    enable: true,
    package: "egg-sequelize",
  },
};
