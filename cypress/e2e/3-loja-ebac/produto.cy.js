/// <reference types= "cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";
describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto na lista', () => {
        /* cy.get('.products > .row')
            //.first() seleciona o primeiro
            //.last() seleciona o ultimo
            //.eq(2) seleciona por númeração
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click() */
        produtosPage.buscarProdutoLista('Atlas Fitness Tank')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Strike Endurance Tee'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    })

    it('Deve visitar  a página do produto', () => {
        produtosPage.visitarProduto('Balboa Persistence Tee')
        cy.get('.product_title').should('contain', 'Balboa Persistence Tee')
    })

    it('Deve adicionar o produto ao carrinho', () => {
        let qtd = 5
        produtosPage.buscarProduto('Helena Hooded Fleece')
        produtosPage.addProdutoCarrinho('M', 'Blue' , qtd)
        cy.get('.woocommerce-message').should('exist')

    })
    it.only('Deve adicionar o produto ao carrinho usando massa de dados', () => {
        cy.fixture('produtos').then(dados => {        
        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[0].tamanho,
            dados[0].cor,
            dados[0].quantidade)
        
        cy.get('.woocommerce-message').should('exist')
    })
    })



});

