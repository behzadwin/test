/// <reference types = 'cypress'/>


    it('fidibo Search', function () {
        cy.visit("https://fidibo.com")
        cy.get("input[name=key]").type("کتاب صوتی اثر مرکب{enter}")
    })

    it('test title ', () => {
        cy.visit("https://fidibo.com")
        cy.title().should('eq', "خرید کتاب و دانلود کتاب الکترونیک از فیدیبو")
        cy.title().should('فیدیبو', 'خرید کتاب و دانلود کتاب الکترونیک از فیدیبو')
    })
  