class pedidoPage {

    loginConta(){
        cy.visit('minha-conta')
        cy.get('#username').type('gabriel.teste@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
    }

    addProduto1(){
        cy.get('.product-block ').eq(1).click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click() 
    }

    addProduto2(){
        cy.get('.product-block ').eq(4).click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
    }

    addProduto3(){
        cy.get('.product-block ').eq(6).click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Gray').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
    }

    addProduto4(){
        cy.get('.product-block ').eq(8).click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new pedidoPage()