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
const fetchPhotos = () =>
  fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=1&_limit=${photosLimit}`
  ).then((res) => res.json());

// escopo assíncrono
async function asyncScope() {
  const photos = await fetchPhotos();
  console.log(photos);
}

// escopo síncrono
function init() {
  asyncScope();

  console.log('escopo sincrono');
}

const fetchCep = (cep) =>
  fetch(`https://viacep.com.br/ws/${cep}/json`).then((res) => res.json());

const showPhotosWithLimit = async () => {
  photosLimit = Number(document.getElementById('photos-input').value);

  const photos = await fetchPhotos();

  createPhotosList(photos, 'photos-limit-response');
};

async function showCEP() {
  const cepInputValue = document.getElementById('cep-input').value;

  const cepResponse = await fetchCep(cepInputValue);

  showCepData(cepResponse);
}

async function getPaginatedPhotos() {
  const getMorePhotosButton = document.getElementById('get-more-photos-button');

  getMorePhotosButton.style.display = 'none';

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${currentPhotosPage}&_limit=${photosLimit}`
  ).then((res) => res.json());

  if (res.length === Number(photosLimit)) {
    getMorePhotosButton.style.display = 'block';
    currentPhotosPage++;
  }

  createPhotosList(res, 'photos-wrapper');
}
