function createBankList(banks) {
  banks.forEach((bank, index) => {
    const div = document.createElement('div');
    div.id = 'bank';
    div.innerHTML = `${index} - <strong>${bank.name}</strong> (${bank.ispb})`;
    document.body.appendChild(div);
  });
}

// ---------------------------
// Criando uma promessa
const firstPromise = new Promise((resolve, reject) => {
  const nome = 'dany';

  if (nome == 'dany') {
    resolve('Usuário encontrado');
  } else {
    reject('O usuário não foi encontrado');
  }
});

// ---------------------------
// Criando Promise com reject
const promisseError = (isSuccess = false) =>
  new Promise((resolve, reject) => {
    if (isSuccess) {
      resolve('Não vai entrar haha');
    } else {
      reject('Entrei no reject. Erro X');
    }
  });

// Encadeando then's
const responseToJson = (cep) => {
  return fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((res) => res.json())
    .then((data) => data);
};

// ---------------------------
// Método catch
const fetchCep = (cep) => {
  return fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
};

function getBanksInBrasil() {
  return fetch('https://brasilapi.com.br/api/banks/v1')
    .then((res) => res.json())
    .then((data) => createBankList(data))
    .catch((err) => console.error(err));
}

function successPromise() {
  firstPromise.then((data) => console.log(data));
}

function errorPromise() {
  promisseError()
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

function promiseAll() {
  Promise.all([firstPromise, fetchCep, responseToJson])
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
    .finally(() => console.log('finally'));
}

function promiseRace() {
  Promise.race([firstPromise, fetchCep, responseToJson])
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
    .finally(() => console.log('finally'));
}
