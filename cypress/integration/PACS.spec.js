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
  
  it('Marital Status',() => {
      cy.get('#maritalStatus-input').select('COHABITING').should('contain', 'Vie Maritale / PACS')
      cy.get('#childNumberPropal-input').select('1').should('contain','1')
      cy.get('[type="checkbox"]').check({ force: true }).should('be.checked') 
      cy.get('[data-test=navigator-compact-forward]').click()
      cy.url().should('include', '/housing')
      cy.get("h2").should('contain', 'Votre logement')
  })
  
  it('Housing Status',() => {  
      cy.get('#housingStatus-input').select('LODGING_PROVIDED_BY_PARTNER').should('contain','Logé(e) par le(la) conjoint(e)', {timeout: 1000})
      cy.get('#housingStatusFrom-input-month').type('05').should('have.value', '05')
      cy.get('#housingStatusFrom-input-year').type('2010').should('have.value', '2010')
      cy.get('[type="checkbox"]').uncheck({ force: true })
      cy.get('[data-test=navigator-compact-forward]').click()
      cy.url().should('include', '/professionalsituation')
      cy.get("h2").should('contain', 'Votre situation professionnelle')
  }) 
  
  it('Activity Sector',() => {
      cy.get('#activitySector-input').select('RETIRED').should('contain','Retraités')
      cy.get('#profession-input').select('RETIRED_FROM_PUBLIC_SECTOR').should('contain','Retraité du secteur public')
      cy.get('#pensionFrom-input-month').type('05').should('have.value', '05')   
      cy.get('#pensionFrom-input-year').type('2013').should('have.value', '2013')
      cy.get('[data-test=navigator-compact-forward]').click()
      cy.url().should('include', '/partnerprofession')
      cy.get("h2").should('contain', 'Profession de votre conjoint')
  })
  
  it('Partner Activity Sector',() => {
      cy.get('#partnerActivitySector-input').select('PUBLIC_SECTOR').should('contain','Salarié(e) du secteur public')
      cy.get('#partnerProfession-input').select('HOSPITAL_CAREGIVER').should('contain','Aide soignant hospitalier')
      cy.get('#partnerContractType-input').select('CDI').should('contain','CDI')
      cy.get('#partnerEmployedFrom-input-month').type('04').should('have.value', '04')
      cy.get('#partnerEmployedFrom-input-year').type('2010').should('have.value', '2010')
      cy.get('[data-test=navigator-compact-forward]').click()
      cy.url().should('include', '/incomes')
      cy.get("h2").should('contain', 'Vos revenus mensuels')
  })
  
   it('Incomes',() => {
      cy.get('#mainIncome-input').type('2200').should('have.value', '2200')
      cy.get('#coIncome-input').type('1700').should('have.value', '1700')
      cy.get('[data-test=navigator-compact-forward]').click()
      cy.url().should('include', '/outcomes')
      cy.get("h2").should('contain', 'Vos charges mensuelles')
  })
  
  it('Outcomes',() => {
      cy.get('#rentAmount-input').type('750').should('have.value', '750')
      cy.get('#loanCount-input').select('0').should('contain','0')
      cy.get('[data-test=navigator-compact-forward]').click()
      cy.url().should('include', '/bank')
      cy.get("h2").should('contain', 'Votre banque')
  })
  
  it('Bank',() => {
      cy.get('#bankCode-input').select('CREDIT_LYONNAIS').should('contain','LCL')
      cy.get('#bankFrom-input-year').type('2013').should('have.value', '2013')
      cy.get('[data-test=navigator-compact-forward]').click()
      cy.url().should('include', '/identity')
      cy.get("h2").should('contain','Vos informations')
  })
  it('Information',()=>{

cy.get('[data-di-id="di-id-66b6d813-77398ce6"]').click()
cy.get('#lastName-input').type('SOU').should('have.value', 'SOU')
cy.get('#firstName-input').type('Tarantino').should('have.value', 'Tarantino')
cy.get('#dateOfBirth-input-day').type('03').should('have.value', '03')
cy.get('#dateOfBirth-input-month').type('04').should('have.value', '04')
cy.get('#dateOfBirth-input-year').type('1992').should('have.value','1992')
cy.get('#postalCode-input').type('33600').should('have.value','33600')
cy.get('#city-input').select('3331833600').should('contain','PESSAC')
cy.contains('Suite').click()

  })

  })