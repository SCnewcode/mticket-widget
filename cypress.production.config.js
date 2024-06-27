const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  requestTimeout: 15000,
  viewportHeight: 800,
  viewportWidth: 800,
  videoCompression: false,
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  // responseTimeout: 12000,

  // experimentalSessionAndOrigin: false,
  e2e: {
    // testIsolation: true,
    // chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
    baseUrl: "https://widget.mticket.com.ua",
    // prod: {
    //   baseUrl: "https://widget.mticket.com.ua"
    // },
  },
  env: {
    MAILOSAUR_API_KEY: "2i6TdSUYtF6sMWam0nEH0IuOBFyyLoWZ",
    chromeWebSecurity: false,
    prod: {
      baseUrl: "https://widget.mticket.com.ua",
    },
    prodFriday: {
      baseUrl: "https://sales.fridayticket.com",
      chromeWebSecurity: false,
    },
    prodMoldova: {
      baseUrl: "https://widget.mticket.md",
    },
  },
});
