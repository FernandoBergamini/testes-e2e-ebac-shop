<reference types="cypress"/>

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

        beforeEach(() => {
            cy.visit ('minha-conta')
            cy.login('aluno_ebac@teste.com','teste@teste.com')
            cy.get('.logo-in-theme > .logo > a > .logo-img').click()
                
        });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    var quantidade= 4
      
    cy.get('[class="product-block grid"]')
        .contains ('Ingrid Running Jacket').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
      
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        cy.get('.checkout-button').click()
        cy.get('#terms').click()
        cy.get('.place-order').click()              
    });

})