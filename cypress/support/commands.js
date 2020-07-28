// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('loadingStep', (creditMaturit,projectSelect,amount)=>{
    cy.get('#projectSelect').select(projectSelect)
    cy.get('#amount').select(amount)
    cy.get('#creditMaturity').select(creditMaturit)

   
})
Cypress.Commands.add('emailingStep', (email)=>{
    cy.get('#email-input')
        .type(email)
        .should('have.value', email)
        .should('have.class', 'ng-valid')
   

   
})
Cypress.Commands.add('mariedStep', (childNumberPropal,MaritalStatus)=>{
    cy.get('#maritalStatus-input').select(MaritalStatus).should('contain','Marié(e)')
    cy.get('#childNumberPropal-input').select(childNumberPropal)



})
Cypress.Commands.add('loadStep', (projectSelect,amount,creditMaturity,)=>{
    cy.get('#projectSelect').select(projectSelect)
    cy.get('#amount').select(amount)
    cy.get('#creditMaturity').select(creditMaturity)
    cy.contains('CONTINUER').click()
    cy.url().should('contain', '/email')
})
Cypress.Commands.add('emailStep', (email)=>{


    cy.get('#email-input').type(email).should('have.value', email)
    cy.get('.main-text').click()


})

Cypress.Commands.add('singlecreditStep', (maritalStatus,childNumber)=>{
      cy.get('#maritalStatus-input').select(maritalStatus)
      cy.get('#childNumberPropal-input').select(childNumber)
      cy.get('[type="checkbox"]').uncheck({force:true})
      cy.contains('Suite').click()
      cy.url().should('contain', '/housing')
})

Cypress.Commands.add('lodgerStep', (housingStatus,housingStatusMouth,housingStatusYear)=>{
    cy.get('#housingStatus-input').select(housingStatus)
    cy.get('#housingStatusFrom-input-month').type(housingStatusMouth)
    cy.get('#housingStatusFrom-input-year').type(housingStatusYear)
})

Cypress.Commands.add('independentStep', (activitySector,profession,businessActivityStartDateMouth,businessActivityStartDateYear)=>{

    cy.get('#activitySector-input').select(activitySector)
    cy.get('#profession-input').select(profession)
    cy.get('#businessActivityStartDate-input-month').type(businessActivityStartDateMouth).should('have.value',businessActivityStartDateMouth)
    cy.get('#businessActivityStartDate-input-year').type(businessActivityStartDateYear).should('have.value',businessActivityStartDateYear)
})

Cypress.Commands.add('incomesStep', (mainIncome)=>{
    cy.get('#mainIncome-input').type(mainIncome).should('have.value', mainIncome)


})

Cypress.Commands.add('outcomesStep', (rentAmount,loanCount,type,loanAmount)=>{
    cy.get('#rentAmount-input').type(rentAmount).should('have.value', rentAmount)
    cy.get('#loanCount-input').select(loanCount)
    cy.get('#type-input').select(type)
    cy.get('#loanAmount-input').type(loanAmount).should('have.value', loanAmount)


})

Cypress.Commands.add('bankStep', (bankCode,bankFromYear)=>{
    cy.get('#bankCode-input').select(bankCode).should('contain',bankCode)
    cy.get('#bankFrom-input-year').type(bankFromYear).should('have.value',bankFromYear)
})

Cypress.Commands.add('identityStep', (lastName, firstName , dateOfBirthDay,dateOfBirthMouth, dateOfBirthYear,postalCode,city)=>{
    cy.get('[data-di-id="di-id-bf89a9dc-e017ffb1"] > label').click({ force: true })
    cy.get('#lastName-input').type(lastName).should('have.value', lastName)
    cy.get('#firstName-input').type(firstName).should('have.value', firstName)
    cy.get('#dateOfBirth-input-day').type(dateOfBirthDay).should('have.value', dateOfBirthDay)
    cy.get('#dateOfBirth-input-month').type(dateOfBirthMouth).should('have.value', dateOfBirthMouth)
    cy.get('#dateOfBirth-input-year').type(dateOfBirthYear).should('have.value', dateOfBirthYear)
    cy.get('#postalCode-input').type(postalCode).should('have.value', postalCode)
    cy.get('#city-input').select(city).should('have.class', 'ng-valid')
    
})


Cypress.Commands.add('contactStep', (cellPhoneNumber, phoneNumber, address,postalCode,city, countryZone) => {

  cy.get('#cellPhoneNumber-input').type(cellPhoneNumber).should('have.value', cellPhoneNumber)
  cy.get('#phoneNumber-input').type(phoneNumber).should('have.value', phoneNumber)
  cy.get('#address-input').type(address).should('have.value',address)
  cy.get('#postalCode-input').type(postalCode).should('have.value',postalCode)
  cy.get('#city-input').select(city).should('have.class', 'ng-valid')
  cy.get('#countryZone-input').select(countryZone).should('have.class', 'ng-valid')
    


})







Cypress.Commands.add('lodingStep', (housingStatusMouth,housingStatusYear)=>{
    cy.get('#housingStatus-input').select('HOME_OWNERSHIP_WITH_MORTGAGE').should('contain','Propriétaire (avec crédit immobilier en cours)')
    cy.get('#housingStatusFrom-input-month').type(housingStatusMouth).should('have.value', housingStatusMouth)
    cy.get('#housingStatusFrom-input-year').type(housingStatusYear).should('have.value', housingStatusYear)

})

Cypress.Commands.add('profisionalsituationmariedStep', (activitySector,profession,contractType,employedFrommonth,employedFromyear)=>{
    cy.get('#activitySector-input').select(activitySector).should('have.value',activitySector)
    cy.get('#profession-input').select(profession).should('have.value',profession)
    cy.get('#contractType-input').select(contractType)
    cy.get('#employedFrom-input-month').type(employedFrommonth).should('have.value', employedFrommonth)
    cy.get('#employedFrom-input-year').type(employedFromyear).should('have.value', employedFromyear)


})

Cypress.Commands.add('conjointpartnerStep', (partnerActivitySector,partnerProfession,partnerContractType,partnerEmployedFromMouth,partnerEmployedFromYear)=>{
    cy.get('#partnerActivitySector-input').select(partnerActivitySector).should('contain','Salarié(e) du secteur privé')
    cy.get('#partnerProfession-input').select(partnerProfession)
    cy.get('#partnerContractType-input').select(partnerContractType).should('have.value',partnerContractType).should('have.class', 'ng-valid')
    cy.get('#partnerEmployedFrom-input-month').type(partnerEmployedFromMouth).should('have.value', partnerEmployedFromMouth).should('have.class', 'ng-valid')
    cy.get('#partnerEmployedFrom-input-year').type(partnerEmployedFromYear).should('have.value', partnerEmployedFromYear).should('have.class', 'ng-valid')

})
Cypress.Commands.add('salaryStep', (mainIncome,coIncome,housingAssistance,additionalIncome)=>{
    cy.get('#mainIncome-input').type(mainIncome).should('have.value', mainIncome).should('have.class', 'ng-valid')
    cy.get('#coIncome-input').type(coIncome).should('have.value', coIncome).should('have.class', 'ng-valid')
    cy.get('#housingAssistance-input').type(housingAssistance)
    cy.get('#additionalIncome-input').type(additionalIncome)
})
Cypress.Commands.add('outcomStep', (mortgageAmount,loanCount,type,loanAmount)=>{
    cy.get('#mortgageAmount-input').type(mortgageAmount).should('have.value', mortgageAmount).should('have.class', 'ng-valid')
    cy.get('#loanCount-input').select(loanCount).should('have.class', 'ng-valid') 
    
       
})
Cypress.Commands.add('bankingStep', (bankCode,bankFromYear)=>{
    cy.get('#bankCode-input').select(bankCode).should('have.value',bankCode)
    cy.get('#bankFrom-input-year').type(bankFromYear).should('have.value',bankFromYear)


})

Cypress.Commands.add('identymariedStep', (lastName,firstName,dateOfBirthdday,dateOfBirthmmonth,dateOfBirthyyear,postal_Code,city)=>{
    cy.get('#GENDERCODE_M').check({force:true})
    cy.get('#lastName-input').type(lastName).should('have.value',lastName)
    cy.get('#firstName-input').type(firstName).should('have.value',firstName)
    cy.get('#dateOfBirth-input-day').type(dateOfBirthdday).should('have.value',dateOfBirthdday)
    cy.get('#dateOfBirth-input-month').type(dateOfBirthmmonth).should('have.value',dateOfBirthmmonth)
    cy.get('#dateOfBirth-input-year').type(dateOfBirthyyear).should('have.value',dateOfBirthyyear)
    cy.get('#postalCode-input').type(postal_Code).should('have.value',postal_Code)
    cy.get('#city-input').select(city)
})
Cypress.Commands.add('identyconjointStep', (lastName,firstName,partnerdateOfBirthonth,partnerdateOfBirthay,partnerdateOfBirthyaer,postalCode,city)=>{
    cy.get('[data-di-id="di-id-66b6d813-7f4a5136"] > label').click({force:true})
    cy.get('#lastName-input').type(lastName).should('have.value',lastName)
    cy.get('#firstName-input').type(firstName).should('have.value',firstName)
    cy.get('#dateOfBirth-input-day').type(partnerdateOfBirthay).should('have.value',partnerdateOfBirthay)
    cy.get('#dateOfBirth-input-month').type(partnerdateOfBirthonth).should('have.value',partnerdateOfBirthonth)
    cy.get('#dateOfBirth-input-year').type(partnerdateOfBirthyaer).should('have.value',partnerdateOfBirthyaer)
    cy.get('#postalCode-input').type(postalCode).should('have.value',postalCode)
    cy.get('#city-input').select(city)
})
Cypress.Commands.add('contactingStep', (cellPhoneNumber,address,postalCode,city,countryZone)=>{
    cy.get('#cellPhoneNumber-input').type(cellPhoneNumber).should('have.value',cellPhoneNumber)
    cy.get('#address-input').type(address).should('have.value',address)
    cy.get('#postalCode-input').type(postalCode).should('have.value',postalCode)
    cy.get('#city-input').select(city).should('have.value',city)
    cy.get('#countryZone-input').select('FR').should('have.value',countryZone)

})
////////////////////////////////////////////////////////////////////////////////////////
Cypress.Commands.add("choix_user", (projet) => {
    cy.get('#projectSelect').select(projet.projectSelect)
        cy.get('#amount').select(projet.amount)
        cy.get('#creditMaturity').select(projet.creditMaturity)
})
Cypress.Commands.add('buttonClick', (label) => {
    cy.contains(label).click()
})

Cypress.Commands.add('urlWebSite', (urlLog )=>{
    cy.url().should('include', urlLog )
})

Cypress.Commands.add('pageTitle', (pageTitle )=>{
    cy.get('title')
            .should('contain',pageTitle)
})

Cypress.Commands.add("emailUser", (identity) => {
    cy.get('#email-input').type(identity.email).should('have.value',identity.email)
})

Cypress.Commands.add("situation_familiale_user", (identity) => {
    cy.get('#maritalStatus-input').select(identity.maritalStatus).should('have.class', 'ng-valid')
    cy.get('#childNumberPropal-input').select(identity.childNumber).should('have.class', 'ng-valid')
})

Cypress.Commands.add("situation_user", (logement) => {
    cy.get('#housingStatus-input').select(logement.housingStatus)
    cy.get('#housingStatusFrom-input-month').type(logement.housingStatusMouth)
    cy.get('#housingStatusFrom-input-year').type(logement.housingStatusYear)
})
Cypress.Commands.add("activityCeliba", (activityStatus,activity) => {
    cy.get('#activitySector-input').select(activity.activitySector)
    cy.get('#profession-input').select(activity.profession).should('have.class', 'ng-valid')
    cy.get('#pensionFrom-input-month').type(activity.pensionFromMouth).should('have.class', 'ng-valid')
    cy.get('#pensionFrom-input-year').type(activity.pensionFromYear).should('have.class', 'ng-valid')

})
Cypress.Commands.add('identity_Partner', (partnerStatus, partnerIdentityStep) => {
        cy.get(partnerIdentityStep.partnerGender).check({ force: true }).should('be.checked')
        cy.get('#lastName-input').type(partnerIdentityStep.partnerLastName).should('have.class', 'ng-valid')
        cy.get('#firstName-input').type(partnerIdentityStep.partnerFirstName).should('have.class', 'ng-valid')
        cy.get('#dateOfBirth-input-day').type(partnerIdentityStep.partnerDateOfBirthDay)
        cy.get('#dateOfBirth-input-month').type(partnerIdentityStep.partnerDateOfBirthMouth)
        cy.get('#dateOfBirth-input-year').type(partnerIdentityStep.partnerDateOfBirthYear).should('have.class', 'ng-valid')
        cy.get('#postalCode-input').type(partnerIdentityStep.partnerPostalCode).should('have.class', 'ng-valid')
        cy.get('#city-input').select(partnerIdentityStep.partnerCity).should('have.class', 'ng-valid')
    
})

Cypress.Commands.add("activite_conjoint_user", (activityStatus_partenaire, partnerActivity) =>{
    if(activityStatus_partenaire.isMariedOrPaced ){
        cy.get('#partnerActivitySector-input').select(partnerActivity.partnerActivitySector)
        cy.get('#partnerProfession-input').select(partnerActivity.partnerProfession).should('have.class', 'ng-valid')
        cy.get('#partnerPensionFrom-input-month').type(partnerActivity.partnerPensionFromMouth)
        cy.get('#partnerPensionFrom-input-year').type(partnerActivity.partnerPensionFromYear)
        
    }
})

Cypress.Commands.add("revenu_user", (mariedStatus, activity, logement, partnerActivity) => {
    cy.get('#mainIncome-input').type(activity.mainIncome).should('have.class', 'ng-valid')
    cy.get('#housingAssistance-input').type(logement.housingAssistance).should('have.class', 'ng-valid')
    cy.get('#additionalIncome-input').type(logement.additionalIncome).should('have.class', 'ng-valid')
    if(mariedStatus.isMariedOrPaced){
        cy.get('#coIncome-input').type(partnerActivity.coIncome).should('have.class', 'ng-valid')
    }
})
Cypress.Commands.add('loyer_User', (situation_logement,logement) => {
    if(situation_logement.isTenant){
        cy.get('#rentAmount-input').type(logement.rentAmount).should('have.class', 'ng-valid')
    }
    
    if(situation_logement.haveOtherLoan || situation_logement.isOwner){
        cy.get('#loanCount-input').select(logement.loanCount).should('have.class', 'ng-valid')
        if(logement.loanCount >= 1){
        cy.get('#type-input').select(logement.type).should('have.class', 'ng-valid')
        cy.get('#loanAmount-input').type(logement.loanAmount).should('have.class', 'ng-valid')
        } 
    }
})

Cypress.Commands.add('banque_user', (banque) => {
    cy.get('#bankCode-input').select(banque.bankCode).should('have.class', 'ng-valid')
    cy.get('#bankFrom-input-year').type(banque.bankFromYear).should('have.class', 'ng-valid')
})
Cypress.Commands.add('identity_User_Celib', (identity) => {
    cy.get(identity.gender).check({ force: true }).should('be.checked')
    cy.get('#lastName-input').type(identity.lastName).should('have.class', 'ng-valid')
    cy.get('#firstName-input').type(identity.firstName).should('have.class', 'ng-valid')
    cy.get('#dateOfBirth-input-day').type(identity.dateOfBirthDay)
    cy.get('#dateOfBirth-input-month').type(identity.dateOfBirthMouth)
    cy.get('#dateOfBirth-input-year').type(identity.dateOfBirthYear).should('have.class', 'ng-valid')
    cy.get('#postalCode-input').type(identity.postalCode).should('have.class', 'ng-valid')
    cy.get('#city-input').select(identity.city).should('have.class', 'ng-valid')
})
Cypress.Commands.add('contact', (identity) => {
    cy.get('#cellPhoneNumber-input').type(identity.cellPhoneNumber).should('have.class', 'ng-valid')
    cy.get('#phoneNumber-input').type(identity.phoneNumber).should('have.class', 'ng-valid')
    cy.get('#address-input').type(identity.address).should('have.class', 'ng-valid')
    cy.get('#postalCode-input').type(identity.postalCode).should('have.class', 'ng-valid')
    cy.get('#city-input').select(identity.city).should('have.class', 'ng-valid')
    cy.get('#countryZone-input').select(identity.countryZone).should('have.class', 'ng-valid')
})