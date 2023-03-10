// -----------------
// SPREAD
// -----------------

// ARRAYS

// -------------
//  EXEMPLO 1: Conseguimos um utilizar um array de nomes na criação de outros arrays de nomes, inserindo o array nomes onde quisermos nos arrays criados;
const nomes = ['Sofia', 'Marcos', 'Bia'];

// spread no meio
const maisNomes = ['Ada', ...nomes, 'Leo'];
// Saída no console: ["Ada", "Sofia", "Marcos", "Bia", "Leo"]

// spread no início
const maisNomes2 = [...nomes, 'Ada', 'Leo'];
// Saída no console: ["Sofia", "Marcos", "Bia", "Ada", "Leo"]

// spread no fim
const maisNomes3 = ['Ada', 'Leo', ...nomes];
// Saída no console: ["Ada", "Leo", "Sofia", "Marcos", "Bia"]
// -------------

// -------------
//  EXEMPLO 2: Concatenando arrays;
const nomesA = ['Sofia', 'Leo'];
const nomesB = ['Marcos', 'Ada'];

// concatenando os dois arrays em uma ordem
const todosNomes1 = [...nomesA, ...nomesB];
// Saída no console: ["Sofia", "Leo", "Marcos", "Ada"]

// concatenando os dois arrays em outra ordem
const todosNomes2 = [...nomesB, ...nomesA];
// Saída no console: ["Marcos", "Ada", "Sofia", "Leo"]

// criando um novo array igual a um existente
const copiaNomes = [...nomesA];
// Saída no console: ["Sofia", "Leo"]
// -------------

// OBJETOS

// -------------
//  EXEMPLO 1: Conseguimos um utilizar um objeto de infos na criação de outros objetos, espalhando seus valores;
const infos = { nome: 'Sofia', idade: 29 };

// sobrescreendo a propriedade idade ao usar o spread no início
const maisInfos1 = { ...infos, idade: 33 };
// Saída no console: {idade: 33,nome: "Sofia"}

// não sobrescreendo a propriedade existente ao usar o spread no final
const maisInfos2 = { idade: 20, ...infos };
// Saída no console: {idade: 29,nome: "Sofia"}

// criando uma nova propriedade
const maisInfos3 = { ...infos, profissao: 'Programadora' };
// Saída no console: {idade: 29,nome: "Sofia",profissao: "Programadora"}
// -------------

// -------------
//  EXEMPLO 2: Espalhando valores de um array em uma chamada de função;

// Espalhando valores de um array no método Math.min para que retorne o menor valor do array
const numeros = [4, 7, 2];
console.log(Math.min(...numeros));
// Saída no console: 2

// Função que recebe dois parâmetros, nome e idade, imagine que sejam infos de uma pessoa, e em seguida imprime no console a apresentação da "pessoa" em questão
function apresenta(nome, idade) {
  console.log(`${nome} tem ${idade} anos.`);
}

const infosDaJuliana = ['Juliana', 32];
apresenta(...infosDaJuliana);
// Saída no console: "Juliana tem 32 anos."
// -------------
