describe('Login', () => {
    beforeEach(() => {
        cy.visit('/');
        // cy.get('.custom-btn').click({ force: true });
    });
    it('Login through Google', () => {
        cy.login('tester@geekyants.com', 'Goldtree@99', () => {
            cy.get('.nav-link').eq(1).click({ force: true });
            // cy.get(':nth-child(2) > .nav-link').click({ force: true });
        }
        )
    })
    // it('Login through Google', () => {
    //     cy.login('tester@geekyants.com', 'Goldtree@99', () => {
    //         cy.get(':nth-child(2) > .nav-link').click({ force: true });

    //     })


    // })
})


