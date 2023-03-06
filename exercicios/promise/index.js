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

// ---------------------------
// Criando Promise com reject
const promisseError = () => {};

// Encadeando then's
const responseToJson = (cep) => {};

// ---------------------------
// Método catch
const fetchCep = (cep) => {};

function getBanksInBrasil() {}

function errorPromise() {}

function promiseAll() {}

function promiseRace() {}
