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