const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,

  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
  },

  supportFolder: false,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
