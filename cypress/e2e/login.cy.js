/// <reference types="cypress"/>

describe('Découverte dun petit scénario de test', () => {
    it('test de connexion valide', () => {
        cy.visit('https://www.bstackdemo.com/')
        cy.get('#signin').click()
        cy.get('#username > .css-yk16xz-control > .css-1hwfws3').type('demouser{enter}')
        cy.get('.css-1wa3eu0-placeholder').type('testingisfun99{enter}')
        cy.get('#login-btn').click()
    });

    it('test de connexion invalide', () => {
        cy.visit('https://www.bstackdemo.com/')
        cy.get('#signin').click()
        cy.get('#username > .css-yk16xz-control > .css-1hwfws3').type('blabla{enter}')
        cy.get('.css-1wa3eu0-placeholder').type('blabla{enter}')
        cy.get('#login-btn').click()
        cy.get('.api-error').should('be.visible').should('have.text','Invalid Username')
    });

    it("test de connexion avec juste le username", () => {
        cy.visit('https://www.bstackdemo.com/')
        cy.get('#signin').click()
        cy.get('#username > .css-yk16xz-control > .css-1hwfws3').type('demouser{enter}')
        cy.get('.css-1wa3eu0-placeholder').type('123{enter}')
        cy.get('#login-btn').click()
        cy.get('.api-error').should('be.visible').should('have.text','Invalid Password')
    });
})