// https://on.cypress.io/api

describe('Testing navbar links', () => {
  it('visits Reto 1', () => {
    cy.visit('/')
    cy.get('aside ul li').contains('Reto 1: Formulario').click()
  })
  it('visits Reto 2', () => {
    cy.visit('/')
    cy.get('aside ul li').contains('Reto 2: Diseño').click()
  })
  it('visits Reto 3', () => {
    cy.visit('/')
    cy.get('aside ul li').contains('Reto 3: Calendario').click()
  })
})
