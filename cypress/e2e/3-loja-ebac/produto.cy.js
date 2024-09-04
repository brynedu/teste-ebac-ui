/// <reference types= "cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    });

    it('Deve selecionar um produto na lista', () => {
        cy.get('.products > .row')
            //.first() seleciona o primeiro
            //.last() seleciona o ultimo
            //.eq(2) seleciona por númeração
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')

    });

});

