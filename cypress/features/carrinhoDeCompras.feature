@Feature_carrinhoDeCompras
Funcionalidade: Carrinho de Compras
  Eu como usuario da pagina da Amazon
  Quero adicionar um produto ao Carrinho de Compras
  Para validar o produdo adicionado ao Carrinho de compras

  Contexto: 
    Dado que o usuario acessa o site da Amazon
    Quando o usuario busca por "headphone sony wh-1000xm4 "
    Entao o sistema mostra resultado da pesquisa
    E o sistema mostra a listagem de produto(s) encontrado(s)



  @carrinhodeCompras_AdicionarProduto_Cenario5
  Cenario5: Sacola de Compras - Adicionar produto
    Dado que o usuario escolhe um produto na lista pesquisada
    Quando o usuario adiciona o produto no Carrinho de Compras
    E seleciona a opção Ir para o carrinho
    Entao o sistema mostra o produto no Carrinho de Compras

  @carrinhodeCompras_AlterarQuantidadeProduto_Cenario6
  Cenario: Sacola de Compras - Adicionar produto
    Dado que o usuario adiciona um produto ao Carrinho de compras
    Quando ele altera a quantidade do produto adicionado
    Entao o sistema deve mostrar a quantidade total escolhida

  @carrinhodeCompras_ExcluirProduto_Cenario7
  Cenario: Sacola de Compras - Excluir produto
    Dado que o usuario adiciona um produto no Carrinho de Compras
    Quando o usuario exclui o produto do Carrinho de Compras
    Entao o sistema mostra o Carrinho de compras sem o produto adicionado

  @carrinhodeCompras_ExcluirProdutoSetandoQuandidadeZero_Cenario8
  Cenario: Sacola de Compras - Excluir produto
    Dado que o usuario adiciona um produto no Carrinho de Compras
    Quando ele altera a quantidade do produto para zero
    Entao o sistema mostra o Carrinho de compras sem o produto adicionado