/// <reference types= "cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });

      it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('teste1924@teste.com')
        cy.get('#password').type('teste1924')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste1924 (não é teste1924? Sair)')
        })
    
       it('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {
            cy.get('#username').type('flawless@hotspot.com')
            cy.get('#password').type('teste1924')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        }); 

        it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {

            cy.get('#username').type('teste1924@teste.com')
            cy.get('#password').type('teste')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail')
        });
})

