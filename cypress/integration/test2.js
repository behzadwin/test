
/// <reference types = 'cypress' />

describe('test login', () => {
    it('tets login number', () => {
       cy.visit("https://fidibo.com/login/")
     cy.get("#mobile") . type ("09355790855{enter}")
   })

    it('test scrol', () => {
       cy.visit("https://fidibo.com/")
       cy.get('.special-footer-phone-no')
      
   })
})