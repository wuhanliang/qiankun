const { defineConfig } = require("@vue/cli-service");
console.log(process.env);
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
});
