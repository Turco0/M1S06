function createBankList(banks) {
  banks.forEach((bank, index) => {
    const div = document.createElement('div');
    div.id = 'bank';
    div.innerHTML = `${index} - <strong>${bank.name}</strong> (${bank.ispb})`;
    document.body.appendChild(div);
  });
}


const primeiraPromise = new Promise((resolve, reject) => {
const a = true;

if (a) {
  resolve("a")
}else{
  reject("Não a")
}
})

const segundaPromise = new Promise((resolve, reject) => {
  const b = true;
  if (b) {
    resolve("b")
  }else{
    reject("Não b")
  }

})

const terceiraPromise = new Promise((resolve, reject) => {
  const c = true;

  if (c) {
    resolve("c")
  }else{
    reject("Não c")
  }
})


// ---------------------------
// Criando uma promessa
const successPromise = () => {};

// ---------------------------
// Criando Promise com reject
const promisseError = () => {};

// Encadeando then's
const responseToJson = (cep) => {};

// ---------------------------
// Método catch
const fetchCep = (cep) => {};

function getBanksInBrasil() {}

function getCep() {}

function errorPromise() {}

function promiseAll() {
  Promise.all([primeiraPromise, segundaPromise, terceiraPromise])
  .then((resolve)=>{console.log(resolve)})
  .catch((reject)=>{console.error(reject)})
  .finally(()=>{console.log("Finalizou")})
}

function promiseRace() {}
