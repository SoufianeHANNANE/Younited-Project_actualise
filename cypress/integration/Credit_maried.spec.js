describe("Credit for a person maried", () => {
    let profile = require('../fixtures/maried')
    before (() => {

        cy.visit("https://www.younited-credit.com/")
        cy.url().should('include','younited-credit')
       
  

    })
    it('loadingpage',()=>{
        
        cy.loadingStep(profile.creditMaturit,profile.projectSelect,profile.amount);
        cy.contains('CONTINUER').click()
    })
    
    it('emailpage',()=>{
        cy.url().should('contain', '/email')
        cy.emailingStep(profile.email);
        cy.contains('Voir mon offre personnalisée').click()
       

    })
    it('Maried', () => {
        
        cy.mariedStep(profile.childNumberPropal,profile.MaritalStatus,profile.MaritalStatus);
        cy.get(':checkbox').uncheck({force:true})
        cy.contains('Suite').click()
        cy.url().should('contain', '/housing')
    })
    it('loged', () => {
        cy.lodingStep(profile.housingStatusMouth,profile.housingStatusYear);
        cy.get(':checkbox').uncheck({force:true})
        cy.contains('Suite').click()
        cy.url().should('contain', '/professionalsituation')
    })
    it('Situation proffetionnelle : Secteur privé', () => {
        cy.profisionalsituationmariedStep(profile.activitySector,profile.profession,profile.contractType,profile.employedFrommonth,profile.employedFromyear);
        cy.contains('Suite').click()
        cy.url().should('contain', '/partnerprofession')
    })
    it('Conjoint Profission', () => {
        cy.conjointpartnerStep(profile.partnerActivitySector,profile.partnerProfession,profile.partnerContractType,profile.partnerEmployedFromMouth,profile.partnerEmployedFromYear);
        cy.contains('Suite').click()
        cy.url().should('contain', '/incomes')
    })
    it('Salaire', () => {
        cy.salaryStep(profile.mainIncome,profile.coIncome,profile.housingAssistance,profile.additionalIncome);
        
        cy.contains('Suite').click()
        cy.url().should('contain', '/outcomes')
    })
    it('Charges mensuelles', () => {
        cy.outcomStep(profile.mortgageAmount,profile.loanCount,profile.type,profile.loanmount);
        cy.contains('Suite').click()
        cy.url().should('contain','/bank')
    })
    it('Banque', () => {
        cy.bankingStep(profile.bankCode,profile.bankFromYear);
        cy.contains('Suite').click()
        cy.url().should('contain','/identity')
    })
    it('Identity maried', () => {
        cy.identymariedStep(profile.lastName,profile.firstName,profile.dateOfBirthdday,profile.dateOfBirthmmonth,profile.dateOfBirthyyear,profile.postalCode,profile.city);
        cy.contains('Suite').click()
        
    })
it('identity Conjoint', () => {
    cy.identyconjointStep(profile.lastName,profile.firstName,profile.partnerdateOfBirthay,profile.partnerdateOfBirthonth,profile.partnerdateOfBirthyaer,profile.postalCode,profile.city);
   
    cy.contains('Suite').click()

})

    it('Contact', () => {
        cy.contactingStep(profile.cellPhoneNumber,profile.address,profile.postalCode,profile.city,profile.countryZone);
        cy.contains('Suite').click()


})
})

    