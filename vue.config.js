const path = require("path");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "src": path.resolve(__dirname, "./src"),
        "assets": path.resolve(__dirname, "./src/assets"),
        "components": path.resolve(__dirname, "./src/components")
      }
    }
  }
};
