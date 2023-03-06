// -----------------
// SPREAD
// -----------------

// ARRAYS

//exemplo 1

const nomes = ['Sofia', 'Marcos', 'Bia'];

// spread no meio
const maisNomes = ['Ada', ...nomes, 'Leo'];
// ['Ada', 'Sofia', 'Marcos', 'Bia', 'Leo']

// spread no início
const maisNomes2 = [...nomes, 'Ada', 'Leo'];
// ['Sofia', 'Marcos', 'Bia', 'Ada',  'Leo']

// spread no fim
const maisNomes3 = ['Ada', 'Leo', ...nomes];
// ['Ada', 'Leo', 'Sofia', 'Marcos', 'Bia']

// exemplo 2

const nomesA = ['Sofia', 'Leo'];
const nomesB = ['Marcos', 'Ada'];

// spread mantém a ordem dos itens
const todosNomes1 = [...nomesA, ...nomesB];
// ['Sofia', 'Leo', 'Marcos', 'Ada']

// spread mantém a ordem dos itens
const todosNomes2 = [...nomesB, ...nomesA];
// ['Marcos', 'Ada', 'Sofia', 'Leo']

// spread para duplicar arrays
const copiaNomes = [...nomesA];
// ['Sofia', 'Leo']

// OBJETOS

// exemplo 1

const infos = { nome: 'Sofia', idade: 29 };

// spread no final
const maisInfos = { nome: 'Ada', ...infos };
// { nome: 'Sofia', idade: 29 }

// spread no final
const maisInfos2 = { ...infos, nome: 'Ada' };
// { nome: 'Ada', idade: 29 }

// spread no final
const maisInfos3 = { ...infos, idade: 33 };
// { nome: 'Sofia', idade: 33 }

// exemplo 2

// função que recebe vários parâmetros
function somaABC(a, b, c) {
  return a + b + c;
}
// vetor de elementos
const vetor1 = [4, 7, 2];
somaABC(...vetor1);
// retorna 13

function apresenta(nome, idade) {
  return `${nome} tem ${idade} anos.`;
}
// em funções apenas fazemos spread de arrays
const vetor2 = ['Juliana', 32];
apresenta(...vetor2);
// retorna "Juliana tem 32 anos."

// -----------------
// OPERADOR REST
// -----------------

// função comum
function infosPessoais(nome, ...infos) {
  return `${nome}: ${infos}`;
}
// arrow functions
const infosPessoais = (nome, ...infos) => {
  return `${nome}: ${infos}`;
};
const infosPessoais = (nome, ...infos) => `${nome}: ${infos}`;

// chamada da função
const infoResult = infosPessoais('Maria', 'Estudante', 'Programadora');
// "Maria: Estudante, Programadora"

// funcao comum
function multiplicar(multip, ...numeros) {
  return numeros.map(function (n) {
    return multip * n;
  });
}
// arrow functions
const multiplicar = (multip, ...numeros) => {
  return numeros.map((n) => {
    return multip * n;
  });
};
const multiplicar = (multip, ...numeros) => numeros.map((n) => multip * n);

// chamada da função
const multResult = multiplicar(2, 4, 3, 1, 8);
// [8, 6, 2, 16]

// funcao comum
function encontraPares(...numeros) {
  return numeros.filter(function (n) {
    return n % 2 === 0;
  });
}
// arrow functions
const encontraPares = (...numeros) => {
  return numeros.filter((n) => {
    return n % 2 === 0;
  });
};
const encontraPares = (...numeros) => numeros.filter((n) => n % 2 === 0);

// chamada da função
const paresResult = encontraPares(4, 2, 3, 1);
// [4, 2]

// funcao comum
function somaTodos(inicial, ...numeros) {
  return numeros.reduce(function (acum, n) {
    return acum + n;
  }, inicial);
}
// arrow functions
const somaTodos = (inicial, ...numeros) => {
  return numeros.reduce((acum, n) => {
    return acum + n;
  }, inicial);
};
const somaTodos = (inicial, ...numeros) =>
  numeros.reduce((acum, n) => acum + n, inicial);

// chamada da função
const somaTodosResult = somaTodos(4, 2, 3, 1, 8); // 18
