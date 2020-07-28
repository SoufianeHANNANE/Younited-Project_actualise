let ProfileC = require('../fixtures/SingleProfile')

describe("Credit for a person single", () => {
    before(() => {

      cy.visit("https://www.younited-credit.com/")

    })
    it('loading',()=>{

      cy.loadStep(ProfileC.projectSelect,ProfileC.amount,ProfileC.creditMaturity)
      cy.emailStep(ProfileC.email)

    })


      
    it('Single Credit', () => {

      cy.singlecreditStep(ProfileC.maritalStatus,ProfileC.childNumber)
      cy.contains('Suite').click()
      cy.url().should('contain', '/housing')

    })

    it('Lodger', () => {

      cy.lodgerStep(ProfileC.housingStatus,ProfileC.housingStatusMouth,ProfileC.housingStatusYear)
      cy.get('[type="checkbox"]').uncheck({force:true})
      cy.contains('Suite').click()
      cy.url().should('contain', '/professionalsituation')
    })


      it('independent', () => {

       cy.independentStep(ProfileC.activitySector,ProfileC.profession,ProfileC.businessActivityStartDateMouth,ProfileC.businessActivityStartDateYear)
       cy.get('#ISCOMPANYBANKRUPT_TRUE').check({force:true})
       cy.contains('Suite').click()
       cy.url().should('contain', '/incomes')
    })
    it('Income', () => {

      cy.incomesStep(ProfileC.mainIncome)
      cy.contains('Suite').click()
  })
  
    it('Outcomes', () => {

    cy.outcomesStep(ProfileC.rentAmount,ProfileC.loanCount,ProfileC.type,ProfileC.loanAmount)
    cy.contains('Suite').click()
    cy.url().should('contain','/bank')
  })

  it('Bank', () => {
    cy.bankStep(ProfileC.bankCode,ProfileC.bankFromYear)
    cy.contains('Suite',{timeout: 3000}).click()
    cy.url().should('contain','/identity')
})

it('Identity', () => {

  cy.identityStep(ProfileC.lastName, ProfileC.firstName ,ProfileC.gender, ProfileC.dateOfBirthDay,ProfileC.dateOfBirthMouth, ProfileC.dateOfBirthYear,ProfileC.postalCode,ProfileC.city)
  cy.contains('Suite').click()
}) 

it('Contacte', () => {
  
  cy.contactStep(ProfileC.cellPhoneNumber, ProfileC.phoneNumber, ProfileC.address,ProfileC.postalCode,ProfileC.city, ProfileC.countryZone)
  cy.contains('Suite').click()
  cy.wait(5000)
  cy.contains('Obtenir votre financement en 1 clic').click()
  
})




})
  