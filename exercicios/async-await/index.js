const getMorePhotosButton = document.getElementById('get-more-photos-button');
let userData;
let currentPhotosPage = 1;
const photosLimit = 20;

function createPhotosList(photos) {
  photos.forEach((photo) => {
    const img = document.createElement('img');
    img.src = photo.url;
    document.getElementById('photos-wrapper').appendChild(img);
  });

  if (photos.length === photosLimit) {
    getMorePhotosButton.style.display = 'block';
    currentPhotosPage++;
  }
}

const fetchCep = (cep) => {
  return fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
};

// escopo síncrono
async function delayPromise() {
  // comando de espera
  await new Promise((res) => setTimeout(res, 1000));
  // executa após conclusão de delay
  console.log('Escopo síncrono');
}

// escopo assíncrono
function callDelayPromise() {
  delayPromise();
  // imprime primeiro no console
  console.log('Escopo assíncrono');
}

async function fetchPhotos() {
  getMorePhotosButton.style.display = 'none';

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${currentPhotosPage}&_limit=${photosLimit}`
  ).then((res) => res.json());

  createPhotosList(res);

  console.log(res);
}

function getCEP() {
  const inputCepValue = document.getElementById('cep-input').value;
  fetchCep(inputCepValue).then((data) => console.log(data));
}

fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20')
  .then((res) => res.json())
  .then(console.log);

fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((res) => res.json())
  .then(console.log);
