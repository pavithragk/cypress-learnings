/// <reference types="cypress" />
const { GoogleSocialLogin } = require('cypress-social-logins').plugins

module.exports = (on, config) => {
  on('task', {


    GoogleSocialLogin: GoogleSocialLogin,

    customizedLogin: (options) => {

      options.additionalSteps = fewMoreStepsPin

      return CustomizedLogin(options)
    }
  });
}

const path = require("path");
const gmail = require("gmail-tester");

// module.exports = (on, config) => {
//   `on` is used to hook into various events Cypress emits
// `config` is the resolved Cypress config

// ...

//   on("task", {
//     "gmail:check": async args => {
//       const { from, to, subject } = args;
//       const email = await gmail.check_inbox(
//         path.resolve(__dirname, "credentials.json"), // credentials.json is inside plugins/ directory.
//         path.resolve(__dirname, "token.json"), // gmail_token.json is inside plugins/ directory.
//         subject,
//         from,
//         to,
//         10,                                          // Poll interval (in seconds)
//         30                                           // Maximum poll interval (in seconds). If reached, return null, indicating the completion of the task().
//       );
//       return email;
//     }
//   });
// };
// }

// /// <reference types="Cypress" />
// const debug = require("debug");
// const path = require("path");
// const gmail_tester = require("/Users/geekyants/Desktop/cypress-learning/node_modules/gmail-tester");

// module.exports = (on, config) => {
//   on("before:browser:launch", (browser = {}, args) => {
//     if (browser.name === "chrome") {
//       args.push("--remote-debugging-port=9221");
//       return args;
//     }
//   });
//   on("task", {
//     "gmail:get-messages": async args => {
//       const messages = await gmail_tester.get_messages(
//         path.resolve(__dirname, "credentials.json"),
//         path.resolve(__dirname, "token.json"),
//         args.options
//       );
//       return messages;
//     }
//   });
// };

