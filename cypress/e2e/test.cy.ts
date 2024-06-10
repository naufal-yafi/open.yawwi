/* eslint-disable no-undef */

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should have title', () => {
    cy.getByData('home').find('h1').contains('asd');
  });
});
