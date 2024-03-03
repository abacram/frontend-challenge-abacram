// https://on.cypress.io/api

describe('Visit home', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h5', 'Frontend challenge')
  })
})
