describe ('Amazon - Busca por produtos', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.com.br/');
      cy.get('#nav-search-submit-button').should('be.visible');
    });
  
    it('Busca por produto valido', () => {
      cy.get('#twotabsearchtextbox').type('É Assim que Acaba: 1');
      cy.get('#nav-search-submit-button').click();
      cy.contains(/É Assim que Acaba: 1/gi).should('be.visible');
    });

    it('Busca por produto invalido', () => {
      cy.get('#twotabsearchtextbox').type(49344347);
      cy.get('#nav-search-submit-button').click();
      cy.contains(/Nenhum resultado para 49344347./gi).should('be.visible');
    });

    it('Busca por produto aproximado', () => {
      cy.get('#twotabsearchtextbox').type('Livro');
      cy.get('#nav-search-submit-button').click();
      cy.contains('resultados para "Livro"').should('be.visible');
    });

    it('Busca vazia', () => {
      cy.contains(/Ofertas do dia/gi).should('be.visible');
      cy.get('#nav-search-submit-button').click(); // Clica na pesquisa sem buscar por algum produto
      cy.contains(/Ofertas do dia/gi).should('be.visible'); //Verifica se o mesmo continua na mesma pagina
    });
  });