context('TestCase1', () => {

    //Test case - 1 : adding the new task, marking it as done and deleting it.

    it('Google login', () => {
        cy.visit('/');

        const onSuccess = () => {
            cy.wait(3000)
            cy.get('.custom-btn').click({ force: true });
            cy.url().should('include', '/home');
            cy.get(':nth-child(3) > .section-wrap > :nth-child(1) > .section-parent > .section').invoke('attr', 'href').then(myLink => {
                cy.visit(myLink);
            })
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })

            cy.get(':nth-child(4) > a > .menu-title').click() // clicking on the todo tab
            cy.get('.form-group > .btn').click() // clicking on the new task
            cy.get('.py-0 > .form-group > .form-control').type("my second task") //entering the task
            cy.get('.mt-1 > .btn').click() //adding the task to the list

            cy.get(':nth-child(1) > .todo-title-wrapper > .todo-title-area > .checkbox > .bx').click()//checking the checkbox
            cy.get('#done > :nth-child(2)').click()//clicking on the done button
            cy.get(':nth-child(1) > .todo-title-wrapper > .todo-item-action > .todo-item-delete > .bx').click() //deleting the task

        }

        cy.login('tester@geekyants.com', 'Goldtree@99', onSuccess)
    });

    //Test case -2  : adding skills

    it('Google login', () => {
        cy.visit('/');

        const onSuccess = () => {

            cy.wait(3000)
            cy.get('.custom-btn').click({ force: true });
            cy.url().should('include', '/home');
            cy.get(':nth-child(3) > .section-wrap > :nth-child(1) > .section-parent > .section').invoke('attr', 'href').then(myLink => {
                cy.visit(myLink);
            })
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.get(':nth-child(17) > a > .menu-title').click()//navigating to add skills
            cy.get('.d-flex > .btn').click()// clicking on add skills
            cy.get('#search_jstree').type("cypress") //entering cypress as text
            cy.contains('button', 'Submit').click() //submitting the skill



        }

        cy.login('tester@geekyants.com', 'Goldtree@99', onSuccess)

    })


});