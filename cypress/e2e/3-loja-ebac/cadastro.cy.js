/// <reference types= "cypress"/>

import { faker } from '@faker-js/faker';
var nome = faker.person.firstName()
var sobrenome = faker.person.lastName()
var email = faker.internet.email()
var senha = faker.internet.password()

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o cadastro', () => {
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    });
       
        it.only('Deve concluir o cadastro usando Comandos Customizados', () => {
            cy.preCadastro(faker.internet.email(),'123@4', faker.person.firstName(), faker.person.lastName())
            cy.get('.woocommerce-message').should('exist')
        })
        



});