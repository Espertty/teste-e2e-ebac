/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import pedidoPage from "../support/page_objects/pedido.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      pedidoPage.loginConta()
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      
      cy.get('#primary-menu > .menu-item-629 > a').click()
      pedidoPage.addProduto1()
      pedidoPage.addProduto2()
      pedidoPage.addProduto3()
      pedidoPage.addProduto4()
      cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#billing_address_1').clear().type(faker.location.streetAddress())
        cy.get('#billing_city').clear().type(faker.location.city())
        cy.get('#billing_postcode').clear().type(faker.location.zipCode('89040220'))
        cy.get('#billing_phone').clear().type('47984695420')
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.wait(5000)
        cy.get('.woocommerce-order-overview__order > strong').should('exist')
  });


})