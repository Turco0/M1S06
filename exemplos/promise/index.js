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
const myPromise = new Promise((resolve, reject) => {
  const turma = 'Itacorubi';

  if (turma === 'Itacorubi') {
    resolve('Você faz parte da turma Itacorubi');
  } else {
    reject('Infelizmente você não faz parte da turma Itacorubi');
  }
});

const successPromise = () => {
  myPromise
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

// Promise com delay
const lazyPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Lazy Promise'), 2000);
});

// Promise sem delay
const fastPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Fast Promise'), 1000);
});

// Promise retorna nome
const namePromise = new Promise((resolve, reject) => {
  resolve('Sérgio');
});

// Encadeando then's
const responseToJson = (cep) => {
  return fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((res) => res.json())
    .then((data) => data);
};

// ---------------------------
// Método fetch
const fetchCep = (cep) => {
  return fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
};

function fetchBanksInBrazil() {
  return fetch('https://brasilapi.com.br/api/banks/v1')
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

function getBanksInBrasil() {
  fetchBanksInBrazil()
    .then((data) => createBankList(data))
    .catch((err) => console.error(err));
}

function getCep() {
  fetchCep('88101420')
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

function delayPromise() {
  lazyPromise.then((res) => console.log(res, 'Concluí'));

  console.log('vou ser chamado primeiro');
}

function promiseAll() {
  Promise.all([myPromise, lazyPromise])
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
    .finally(() => console.log('Finalizei a promessa'));
}

function promiseRace() {
  Promise.race([fastPromise, lazyPromise])
    .then((res) => console.log('O vencedor é:', res))
    .catch((err) => console.error(err))
    .finally(() => console.log('Finalizei a promessa'));
}
