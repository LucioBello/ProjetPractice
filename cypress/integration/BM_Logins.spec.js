/// <reference types="cypress" />

describe('BM Login Test Suite', () => {
    it('BM Login failed', () => {
        // cy.visit('https://preprod.backmarket.fr/fr-fr/register') on commands.js
        // saisie login
        cy.get('#signin-email')
            .clear()
            .type('fake@email.com')
        // saisie mdp
        cy.get('#signin-password')
            .clear()
            .type('fakepassword')
        // clic bouton login
        // cy.xpath('//*[@id="__layout"]/div/div[3]/div/div/div[2]/section[1]/div/form/div[4]/button').click()
        cy.contains('Welcome Back!').click()
        // test message erreur login
        cy.xpath('//*[@id="__layout"]/div/div[3]/div/div/div[2]/section[1]/div/form/p').should('be.visible')
        cy.wait(1000)
    })  

    it('BM Login success', () => {
        // cy.visit('https://preprod.backmarket.fr/fr-fr/register') on commands.js
        // saisie login
        cy.get('#signin-email')
            .clear()
            .type('sls@qestit.com')
        // saisie mdp
        cy.get('#signin-password')
            .clear()
            .type('LapinCretin2020')
        // clic bouton login
        cy.xpath('//*[@id="__layout"]/div/div[3]/div/div/div[2]/section[1]/div/form/div[4]/button').click()
        // test ecran mes commandes ok
        cy.wait(1000)
        cy.xpath('//*[@id="__layout"]/div/div[3]/div/div[2]/div[1]/h2').should('be.visible')
        cy.xpath('//*[@id="__layout"]/div/div[3]/div/div[2]/div[1]/h2').contains('Mes commandes')
        cy.wait(1000)
    })
})
