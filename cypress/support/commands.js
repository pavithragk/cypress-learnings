// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("login", (username, password, onSuccess) => {
    describe('Login', () => {
        it('Login through Google', () => {
            const socialLoginOptions = {

                username: username,
                password: password,
                loginUrl: 'http://geekyants-login.geekydev.com/#',
                headless: false,
                preLoginSelector: '.custom-btn',
                logs: true,
                isPopup: false,

            }

            return cy.task('GoogleSocialLogin', socialLoginOptions).then(({ cookies }) => {
                cy.clearCookies()
                const cookie = cookies.filter(cookie => cookie.name === 'geekyants_session').pop()
                if (cookie) {
                    cy.setCookie(cookie.name, cookie.value, {
                        domain: cookie.domain,
                        expiry: cookie.expires,
                        httpOnly: cookie.httpOnly,
                        path: cookie.path,
                        secure: cookie.secure
                    })
                    Cypress.Cookies.defaults({
                        preserve: 'geekyants_session'
                    })
                    onSuccess()

                }


            })
        })
    })







})