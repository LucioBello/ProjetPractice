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
beforeEach(() => {
    // Access to BM site
    cy.visit('https://preprod.backmarket.fr/fr-fr/register')
    cy.wait(1000)
    cy.xpath('//*[@id="__layout"]/div/div[1]/div[1]/div[2]/section/div/div/div[2]/button[3]/div/span').click()
    cy.wait(1000)
})