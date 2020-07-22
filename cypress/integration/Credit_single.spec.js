describe("Credit for a person single", () => {
    before (() => {

      cy.visit("https://www.younited-credit.com/")
      cy.get('#projectSelect').select('NEWCAR')
      cy.get('#amount').select('10K')
      cy.get('#creditMaturity').select('M24')
      cy.contains('CONTINUER').click()
      cy.get('#email-input').type('soufiane.hannane@gmail.com').should('have.value', 'soufiane.hannane@gmail.com')
      cy.contains('Voir mon offre personnalisée').click()
      cy.url().should('contain', '/familysituation')

    })


      
    it('Single Credit', () => {

      cy.get('#maritalStatus-input').select('SINGLE')
      cy.get('#childNumberPropal-input').select('0')
      cy.get('[type="checkbox"]').uncheck({force:true})
      cy.contains('Suite').click()
      cy.url().should('contain', '/housing')

    })

    it('Lodger', () => {

      cy.get('#housingStatus-input').select('TENANT')
      cy.get('#housingStatusFrom-input-month').type('03')
      cy.get('#housingStatusFrom-input-year').type('2014')
      cy.get('[type="checkbox"]').uncheck({force:true})
      cy.contains('Suite').click()
      cy.url().should('contain', '/professionalsituation')
    })


      it('independent', () => {

        cy.get('#activitySector-input').select('INDEPENDENT')
        cy.get('#profession-input').select('AUTO_ENTREPRENEUR')
        cy.get('#businessActivityStartDate-input-month').type('06').should('have.value', '06')
        cy.get('#businessActivityStartDate-input-year').type('2019').should('have.value', '2019')
        cy.get('#ISCOMPANYBANKRUPT_TRUE').check({force:true})
        cy.contains('Suite').click()
        cy.url().should('contain', '/incomes')
    })
    it('Income', () => {

      cy.get('#mainIncome-input').type('2450').should('have.value', '2450')
      cy.contains('Suite').click()
  })
  
    it('Montant du loyer', () => {

    cy.get('#rentAmount-input').type('500').should('have.value', '500')
    cy.get('#loanCount-input').select('1')
    cy.get('#type-input').select('PERSONAL_LOAN')
    cy.get('#loanAmount-input').type('250').should('have.value', '250')
    cy.contains('Suite').click()
    cy.url().should('contain','/bank')
  })

  it('Bank', () => {

    cy.get('#bankCode-input').select('CREDIT_LYONNAIS').should('contain','LCL')
    cy.get('#bankFrom-input-year').type('2010').should('have.value','2010')
    cy.contains('Suite',{timeout: 3000}).click()
    cy.url().should('contain','/identity')
})

it('Identity', () => {

  cy.get('#GENDERCODE_M').check({force:true})
  cy.get('#lastName-input').type('Soufiane').should('have.value','Soufiane')
  cy.get('#firstName-input').type('HAN').should('have.value','HAN')
  cy.get('#dateOfBirth-input-day').type('03').should('have.value','03')
  cy.get('#dateOfBirth-input-month').type('04').should('have.value','04')
  cy.get('#dateOfBirth-input-year').type('1992').should('have.value','1992')
  cy.get('#postalCode-input').type('33600').should('have.value','33600')
  cy.get('#city-input').select('3331833600').should('contain','PESSAC')
  cy.contains('Suite').click()
  cy.url().should('contain','/contact')
}) 

it('Contacte', () => {
  
  cy.get('#cellPhoneNumber-input').type('0678543778').should('have.value','0678543778')
  cy.get('#phoneNumber-input').type('0567678756').should('have.value','0567678756')
  cy.get('#address-input').type('39 Allée gayon').should('have.value','39 Allée gayon')
  cy.get('#postalCode-input').type('33600').should('have.value','33600')
  cy.get('#city-input').select('PESSAC').should('contain','PESSAC')
  cy.get('#countryZone-input').select('FR').should('contain','France')
  cy.contains('Suite').click()
  cy.wait(5000)
  cy.contains('Obtenir votre financement en 1 clic').click()
  
})




})
  