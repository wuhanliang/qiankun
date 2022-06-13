"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cors: {
    enable: true,
    package: "egg-cors",
  },
  swaggerdoc: {
    enable: true,
    package: "egg-swagger-doc",
  },
};
