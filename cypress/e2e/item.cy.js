/// <reference types="cypress"/>

describe('Sélection des items', () => {
    before('Connexion login', () => {
        cy.visit('https://www.bstackdemo.com/')
        cy.get('#signin').click()
        cy.get('#username > .css-yk16xz-control > .css-1hwfws3').type('demouser{enter}')
        cy.get('.css-1wa3eu0-placeholder').type('testingisfun99{enter}')
        cy.get('#login-btn').click()
    })
    it('Trier du plus cher au moins cher', () => {
        cy.get('select').select('highestprice')
    })
})