describe('sign up validation', () => {
    beforeEach(() => {
      cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    })
    it('validate sign in', () => {
        // cy.get('#customer\.firstName').click().type('text')
        cy.get('form > :nth-child(2) > .input').type('Wheel')
        cy.get(':nth-child(4) > .input').type('@Password1')
        cy.get(':nth-child(5) > .button').click()
    })
})