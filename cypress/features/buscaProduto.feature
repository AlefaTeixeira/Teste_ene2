@Feature_buscaProdutos
Funcionalidade: Buscar um produto
  Eu como usuario acessando o site da Amazon
  Quero realizar a busca por produto
  Para validar o resultado da busca

  @buscaProdutoValido_Cenario1
  cenario1: Buscar produto - Valido
    Dado que o usuario acessa o site da Amazon
    Quando o usuario busca por <produto_Valido>
    Entao o sistema mostra resultado maior que Zero
    E o sistema mostra a lista de produto(s) encontrado(s)

    Exemplos: 
      | produto_valido             |
      | "É Assim que Acaba: 1"     |
      | "Samsung book core i7"     |
      | "fone de ouvido jbl 510bt" |


  @buscaProdutoInvalido_Cenario2
  Cenario2: Buscar por produto - Invalido
    Dado que o usuario acessa o site da Amazon
    Quando o usuario busca por <produto_Invalido>
    Entao o sistema nao deve mostrar resultado de produto(s) encontrado(s)

    Exemplos: 
      | produto_Invalido        |
      | "49344347"              |
      | "doksoksdoskdosdksodks" |


  @buscaProdutoAlternativo_Cenario3
  Cenario3: Buscar por produto - Nome aproximado
    Dado que o usuario acessa o site da Amazon
    Quando o usuario busca por <nome_Aproximado>
    Entao o sistema mostra resultado de acordo com a pesquisa aproximada
    E o sistema deve mostrar a listagem de produto(s) encontrado(s)

    Exemplos: 
      | nome_Aproximado  |
      | "Livro"    |
      | "PC"      |
      | "Fones de ouvido" |


  @buscaProdutoVazio_Cenario4
  Cenario: Buscar por produto - Campo de pesquisa vazio
    Dado que o usuario acessa o site da Amazon
    Quando o usuario busca sem digitar algo no campo de pesquisa
    Entao o sistema continuará na pagina atual
    E o sistema nao fara a busca por produtos