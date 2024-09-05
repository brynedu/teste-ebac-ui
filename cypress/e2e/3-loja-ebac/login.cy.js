/// <reference types= "cypress"/>
const perfil = require('../../fixtures/perfil.json')
describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

      it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('teste1924@teste.com')
        cy.get('#password').type('teste1924')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
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

        it('Deve fazer login com sucesso usando base de dados', () => {
            cy.get('#username').type(perfil.usuario)
            cy.get('#password').type(perfil.senha)
            cy.get('.woocommerce-form > .button').click()
        });
        it('Deve fazer login com sucesso usando Fixture', () => {
            cy.fixture('perfil').then( dados => {
                cy.get('#username').type(dados.usuario , { log: false })
                cy.get('#password').type(dados.senha , { log: false })
                cy.get('.woocommerce-form > .button').click()
                cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
            })
        })
        it.only('Deve fazer login com sucesso usando Comandos Customizados', () => {
            cy.login(perfil.usuario , perfil.senha)
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        })


})

