/// <reference types= "cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Adicionando produto na wishlist e finalizando compra', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto, adicionar na wishlist, cadastrar uma conta, configurar produto e finalizar compra', () => {
        var email = faker.internet.email()
        var pass = faker.internet.password()
        cy.get('.product-block')
            .first()
            .click()
            cy.get('.summary > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > .add_to_wishlist > :nth-child(2) > span').click()
            cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
            cy.get('#reg_email').type(email)
            cy.get('#reg_password').type(pass)
            cy.get(':nth-child(4) > .button').click()
            cy.get(':nth-child(2) > .text-skin > .fa').click()
            cy.get('.title-cart').click()
            cy.get('.button-variable-item-XS').click()
            cy.get('.button-variable-item-Blue').click()
            cy.get('.single_add_to_cart_button').click()
            cy.get('.woocommerce-message > .button').click()
            cy.get('.checkout-button').click()
            cy.get('#order_review_heading').should('contain', 'Your order')
    });

});

