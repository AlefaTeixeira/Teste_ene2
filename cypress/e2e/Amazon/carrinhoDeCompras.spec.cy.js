describe ('Amazon - Adição de produtos ao carrinho', () => {

  beforeEach(() => {
    cy.visit('https://www.amazon.com.br/');
    cy.get('#nav-search-submit-button').should('be.visible'); //Checa se o botão de pesquisa está habilitado na tela
  });

  it('Adicionando um produto especifico ao carrinho', () => {
    cy.get('#twotabsearchtextbox').type('Monitor Gamer TGT Altay T3, 23.8 Pol');
    cy.get('#nav-search-submit-button').click();
    cy.get('[data-asin="B0BT83PRG8"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base').click();
    cy.contains(/Adicionar ao carrinho/gi).click();
    cy.contains('Adicionado ao carrinho').should('be.visible');
    cy.get('#sw-gtc > span > a').click();
    cy.contains('Carrinho de compras').should('be.visible');
  });

  it('Alterando quantidade do produto no carrinho', () => {
    cy.get('#twotabsearchtextbox').type('Fone'); //Realiza a pesquisa por Fone
    cy.get('#nav-search-submit-button').click(); //Clica para realizar a pesquisa
    cy.contains(/Fone de Ouvido JBL Tune 110 Intra-Auricular Preto/gi).click(); //Procura por nome exato da pesquisa
    cy.contains(/Adicionar ao carrinho/gi).click();
    cy.contains('Adicionado ao carrinho').should('be.visible');
    cy.get('#sw-gtc > span > a').click();
    cy.contains('Carrinho de compras').should('be.visible');
    cy.get('#a-autoid-0-announce').click(); //Clica na quantidade atual do produto no carrinho
    cy.get('#quantity_5').click(); //Altera a quantidade para 5
  });

  it('Exclusão de um produto do carrinho', () => {
    cy.get('#twotabsearchtextbox').type('Mochila');
    cy.get('#nav-search-submit-button').click();
    cy.contains('Mochila Targus 15.6" Intellect Essentials para notebook').click();
    cy.contains(/Adicionar ao carrinho/gi).click();
    cy.contains('Adicionado ao carrinho').should('be.visible');
    cy.get('#sw-gtc > span > a').click();
    cy.contains('Carrinho de compras').should('be.visible');
    cy.get('.sc-action-delete > .a-declarative > .a-color-link').click(); // Clica no botão excluir, para exclusão do produto
  });

  it('Alteração da quantidade para zero e exclusão do produto automaticamente', () => {
    cy.get('#twotabsearchtextbox').type('Mouse pad');
    cy.get('#nav-search-submit-button').click();
    cy.contains('Mouse Pad Com Apoio Para Punho Em Gel Preto Bright').click();
    cy.contains(/Adicionar ao carrinho/gi).click();
    cy.contains('Adicionado ao carrinho').should('be.visible');
    cy.get('#sw-gtc > span > a').click();
    cy.contains('Carrinho de compras').should('be.visible');
    cy.get('#a-autoid-0-announce').click();
    cy.get('#quantity_0').click(); //Seta quantidade para 0, com isso excluindo o produto do carrinho
  });
});