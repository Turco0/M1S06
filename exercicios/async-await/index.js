// códigos que já aprendemos antes
let currentPhotosPage = 1;
let photosLimit = 20;

function createPhotosList(photos, htmlWrapperId) {
  photos.forEach((photo) => {
    const img = document.createElement('img');
    img.src = photo.url;
    document.getElementById(htmlWrapperId).appendChild(img);
  });
}

function showCepData(response) {
  const cep = document.createElement('p');
  const cidade = document.createElement('p');
  const bairro = document.createElement('p');
  const rua = document.createElement('p');

  cep.innerHTML = `O CEP ${response.cep} pertence a UF ${response.uf}.`;
  cidade.innerHTML = `Cidade: ${response.localidade}.`;
  bairro.innerHTML = `Bairro: ${response.bairro}.`;
  rua.innerHTML = `Logradouro: ${response.logradouro}.`;

  document.getElementById('cep-response').appendChild(cep);
  document.getElementById('cep-response').appendChild(cidade);
  document.getElementById('cep-response').appendChild(bairro);
  document.getElementById('cep-response').appendChild(rua);
}

// ---------------
// conteúdos da aulas
// ---------------
// escopo síncrono
async function delayPromise() {}

// escopo assíncrono
function callDelayPromise() {}

const fetchCep = (cep) => {};

const showPhotosWithLimit = async () => {};

async function showCEP() {}

async function getPaginatedPhotos() {}
