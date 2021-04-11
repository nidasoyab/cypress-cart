/// <reference types="Cypress"/>

describe('signUp', () => {  
  beforeEach( ()=>{
    cy.SignUp()
  })
  
  it('CheckOut', ()=>{
    
    cy.wait(10000)
    cy.get(':nth-child(2) > .category').click()
    cy.get('ul.sub-category-links>li>a').contains('Feminine Care',{force:true}).click()
    cy.get(":nth-child(3)>[data-testid=product-card]>.product-button-group>.styles-module--opt-button--2VJ1m").contains('Quick View').click({force: true})
    cy.get('.quantity-dropdown > .custom-dropdown > .ui').click()
    cy.get('div[role="option"]>span').contains('4').click()
    cy.get('.quick-add-price-add > .styles-module--opt-button--2VJ1m').click()
    cy.get('[data-testid=checkout]').click()
    cy.get(':nth-child(2) > .card-template').click()

    cy.get('.style-module--shipping-form--1Na8q > [data-testid=opt-form-with-error] > form > .opt-form-with-error__l-right-10 > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('Eddy')
    cy.get('.style-module--shipping-form--1Na8q > [data-testid=opt-form-with-error] > form > .opt-form-with-error__l-left-10 > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('Sanchez')
    cy.get('.style-module--shipping-form--1Na8q > [data-testid=opt-form-with-error] > form > :nth-child(3) > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('10436 Oakford Rd')
    cy.get('.style-module--shipping-form--1Na8q > [data-testid=opt-form-with-error] > form > .opt-form-with-error__city > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('Oakford')
    cy.get('.style-module--shipping-form--1Na8q > [data-testid=opt-form-with-error] > form > .opt-form-with-error__state > .style-module--container--3k0fT > [data-testid=state]').select('IL')
    cy.get('.style-module--shipping-form--1Na8q > [data-testid=opt-form-with-error] > form > .opt-form-with-error__zip > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('62673')
    cy.get('.style-module--shipping-form--1Na8q > [data-testid=opt-form-with-error] > form > :nth-child(9) > .opt-form-cancel-save > :nth-child(2) > [data-testid=btn-change-email]').click()

    cy.wait(5000)
    cy.get('[data-testid=btn-billing]').click()
    cy.get(':nth-child(1) > .card-template').click()
    
    cy.getWithinIframe('[name="cardnumber"]').click({ force: true }).type('4242424242424242');
    cy.getWithinIframe('[name="exp-date"]').type('0923');
    cy.getWithinIframe('[name="cvc"]').type('344');

    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > .opt-form-with-error__l-right-10 > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('Ed')
    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > .opt-form-with-error__l-left-10 > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('San')
    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > :nth-child(3) > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('90 Lodge Rd')
    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > .opt-form-with-error__city > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('Poquoson')
    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > .opt-form-with-error__state > .style-module--container--3k0fT > [data-testid=state]').select('IL')
    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > .opt-form-with-error__zip > .Label-module--label--2JSVv > .TextInput-module--input-wrapper--Kd-BG > .TextInput-module--input--1_OT7').type('62673')
    
    cy.get('.style-module--payment-method-form--3finD > [data-testid=opt-form-with-error] > form > :nth-child(9) > .opt-form-cancel-save > :nth-child(2) > [data-testid=btn-change-email]').click()
    cy.wait(5000)
    cy.get('div.row>div>button[type="submit"]').contains('Pay now').click({ force: true })
  })
})