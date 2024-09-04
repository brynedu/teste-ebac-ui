/// <reference types= "cypress"/>

import { faker } from '@faker-js/faker';
describe('Funcionalidade: Cadastro', () => {

    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o cadastro', () => {
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        var email = faker.internet.email()
        
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('123@4')
        cy.get(':nth-child(4) > .button').click()
        //cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('#password_current').type('123@4')
        cy.get('#password_1').type('quatorze@2001')
        cy.get('#password_2').type('quatorze@2001')
        cy.get('.woocommerce-Button').click()
        /* cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_company').type('EBAC-QA')

        // cy.get('#select2-billing_country-container').select('Brasil')

        // cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').select('select2-billing_country-result-9b59-BR')

        // cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').select('Brasil)

        // cy.get('#select2-billing_country-container').click().select('Afeganistão')        

        // cy.get('#select2-billing_country-result-eb0i-BR').select('Brasil');
          

        cy.get('#billing_address_1').type(faker.location.streetAddress())
        cy.get('#billing_city').type(faker.location.city())
        cy.get('#select2-billing_state-container').select(faker.location.state())
        cy.get('#billing_postcode').type(faker.location.zipCode())
        cy.get('#billing_phone').type(faker.phone.number())
        cy.get('.button').click() */




    });


});