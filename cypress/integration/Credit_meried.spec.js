describe("Credit for a person single", () => {
    before (() => {

      cy.visit("https://www.younited-credit.com/")
      cy.get('#projectSelect').select('NEWCAR')
      cy.get('#amount').select('20K')
      cy.get('#creditMaturity').select('M24')
      cy.contains('CONTINUER').click()
      cy.get('#email-input').type('soufiane.hannane@gmail.com').should('have.value', 'soufiane.hannane@gmail.com')
      cy.contains('Voir mon offre personnalisée').click()
      cy.url().should('contain', '/familysituation')

    })
    it('Maried', () => {
        
        cy.get('#maritalStatus-input').select('MARRIED').should('contain','Marié(e)')
        cy.get('#childNumberPropal-input').select('2')
        cy.get(':checkbox').uncheck({force:true})
        cy.contains('Suite').click()
        cy.url().should('contain', '/housing')
    })
    it('loged', () => {
        cy.get('#housingStatus-input').select('HOME_OWNERSHIP_WITH_MORTGAGE').should('contain','Propriétaire (avec crédit immobilier en cours)')
        cy.get('#housingStatusFrom-input-month').type('12').should('have.value', '12')
        cy.get('#housingStatusFrom-input-year').type('2010').should('have.value', '2010')
        cy.get(':checkbox').uncheck({force:true})
        cy.contains('Suite').click()
        cy.url().should('contain', '/professionalsituation')
    })
    it('Situation proffetionnelle : Secteur privé', () => {
        cy.get('#activitySector-input').select('PRIVATE_SECTOR').should('contain','Salarié(e) du secteur privé')
        cy.get('#profession-input').select('MIDDLE_GRADE_MANAGER').should('contain','Agent de sécurité')
        cy.get('#contractType-input').select('CDI')
        cy.get('#employedFrom-input-month').type('01').should('have.value', '01')
        cy.get('#employedFrom-input-year').type('2005').should('have.value', '2005')
        cy.contains('Suite').click()
        cy.url().should('contain', '/partnerprofession')
    })
    it('Conjoint Profission', () => {
        cy.get('#partnerActivitySector-input').select('PRIVATE_SECTOR').should('contain','Salarié(e) du secteur privé')
        cy.get('#partnerProfession-input').select('SECURITY_GUARD').should('contain','Agent de sécurité')
        cy.get('#partnerContractType-input').select('CDI').should('contain','CDI')
        cy.get('#partnerEmployedFrom-input-month').type('02').should('have.value', '02')
        cy.get('#partnerEmployedFrom-input-year').type('2013').should('have.value', '2013')
        cy.contains('Suite').click()
        cy.url().should('contain', '/incomes')
    })
    it('Salaire', () => {
        cy.get('#mainIncome-input').type('2200').should('have.value', '2200')
        cy.get('#coIncome-input').type('1700').should('have.value', '1700')
        cy.get('#housingAssistance-input').type('0')
        cy.get('#additionalIncome-input').type('0')
        cy.contains('Suite').click()
        cy.url().should('contain', '/outcomes')
    })
    it('Charges mensuelles', () => {
        cy.get('#mortgageAmount-input').type('500').should('have.value', '500')
        cy.get('#loanCount-input').select('1')
        cy.get('#type-input').select('AUTO_MOTO')
        cy.get('#loanAmount-input').type('150')
        cy.contains('Suite').click()
        cy.url().should('contain','/bank')
    })
    it('Banque', () => {
        cy.get('#bankCode-input').select('BANQUE_POSTALE').should('contain','Crédit Agricole')
        cy.get('#bankFrom-input-year').type('2002').should('have.value','2002')
        cy.contains('Suite').click()
        cy.url().should('contain','/identity')
    })
    it('Identity Conjoint', () => {

        cy.get('#GENDERCODE_MME').check({force:true})
        cy.get('#lastName-input').type('SOU').should('have.value','SOU')
        cy.get('#maidenName-input').type('SOU').should('have.value','SOU')
        cy.get('#firstName-input').type('HAN').should('have.value','HAN')
        cy.get('#dateOfBirth-input-day').type('10').should('have.value','10')
        cy.get('#dateOfBirth-input-month').type('03').should('have.value','03')
        cy.get('#dateOfBirth-input-year').type('1992').should('have.value','1992')
        cy.get('#postalCode-input').type('33600').should('have.value','33600')
        cy.get('#city-input').select('PESSAC')
        cy.contains('Suite').click()
        
    })
    it('Contacte', () => {
        cy.get('#cellPhoneNumber-input').type('0675785905').should('have.value','0675785905')
        cy.get('#phoneNumber-input').type('0575785905').should('have.value','0575785905')
        cy.get('#address-input').type('39 Allée gayon').should('have.value',"39 Allée gayon")
        cy.get('#postalCode-input').type('33600').should('have.value','33600')
        cy.get('#city-input').select('3328133700').should('contain','PESSAC')
        cy.get('#countryZone-input').select('FR').should('contain','France')
        cy.contains('Suite').click() 
    })


})
    