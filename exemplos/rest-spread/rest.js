// -----------------
// OPERADOR REST
// -----------------

// -------------
//  EXEMPLO 1: Função infosPessoais recebe um nome e uma quantidade ilimitada de informações, a partir disso imprime no console o nome recebido e o array de informações com cada valor inserido

function infosPessoais(nome, ...infos) {
  console.log(nome, infos);
}

infosPessoais('Maria', 'Estudante', 'Programadora');
// Saída no console: "Maria", ["Estudante", "Programadora"]

// -------------

// -------------
//  EXEMPLO 2: Função multiplicar recebe um multiplicador e uma quantidade ilimitada de números, por meio do método map gera um array de cada número inserido multiplicado pelo multiplicador inserido
const multiplicar = (multiplicador, ...numeros) =>
  numeros.map((numero) => numero * multiplicador);

console.log(multiplicar(2, 4, 3, 1, 8));
// Saída no console: [8, 6, 2, 16]
// -------------

// -------------
//  EXEMPLO 3: Função encontraPares recebe uma quantidade ilimitada de números, e por meio do método filter remove valores que não sejam pares.
// *O parâmetro números se torna um array por estarmos usando rest operator.
const encontraPares = (...numeros) =>
  console.log(numeros.filter((n) => n % 2 === 0));

encontraPares(4, 2, 3, 1);
// Saída no console: [4, 2]
// -------------

// -------------
//  EXEMPLO 4: Função somaTodos recebe um valor inicial e uma quantidade ilimitada de números, e por meio do método reduce soma todos os valores inseridos ao valor do parâmetro inicial.
// *O parâmetro números se torna um array por estarmos usando rest operator.
const somaTodos = (inicial, ...numeros) =>
  console.log(numeros.reduce((acum, n) => acum + n, inicial));

somaTodos(4, 2, 3, 1, 8);
// Saída no console: 18
// -------------
