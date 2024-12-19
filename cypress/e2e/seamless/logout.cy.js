// Import random data functions
const {
    getRandomString,
    getRandomNumber,
    getRandomAddress,
    getRandomCity,
    getRandomState,
    getRandomZipCode,
    getRandomPhoneNumber,
} = require('../../support/randomData'); // Adjust the path as needed

describe('sign up validation', () => {
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
        // Generate random data for each field
        const firstName = getRandomString(8);
        const lastName = getRandomString(10);
        const address = getRandomAddress();
        const city = getRandomCity();
        const state = getRandomState();
        const zipCode = getRandomZipCode();
        const phoneNumber = getRandomPhoneNumber();
        const ssn = getRandomNumber(9); // 9-digit SSN
        const username = `${getRandomString(5)}${getRandomNumber(3)}`;
        const password = getRandomString(10);

        // Fill out the form using the generated random data
        cy.get(':nth-child(1) > [width="20%"]').click().type(firstName);
        cy.get(':nth-child(2) > [width="20%"]').click().type(lastName);
        cy.get(':nth-child(3) > [width="20%"]').click().type(address);
        cy.get(':nth-child(4) > [width="20%"]').click().type(city);
        cy.get(':nth-child(5) > [width="20%"]').click().type(state);
        cy.get(':nth-child(6) > [width="20%"]').click().type(zipCode);
        cy.get(':nth-child(7) > [width="20%"]').click().type(phoneNumber);
        cy.get(':nth-child(8) > [width="20%"]').click().type(ssn);

        cy.get(':nth-child(10) > [width="20%"]').click().type(username);
        cy.get(':nth-child(11) > [width="20%"]').click().type(password);
        cy.get(':nth-child(12) > [width="20%"]').click().type(password);
        // Submit the form
        cy.get('[colspan="2"] > .button').click();
     
    });

    it('validate logout process', () => {
        cy.get('#leftPanel > ul > :nth-child(8) > a').click()
    })
    
});
