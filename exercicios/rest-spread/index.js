const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8ce7339e12msh80e37eee8cbb223p1f96a6jsne986d78d6df8',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
  },
};

fetch('https://api-nba-v1.p.rapidapi.com/seasons', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
