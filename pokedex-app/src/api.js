const axios = require('axios');

const url = 'https://pokeapi.co/api/v2/pokemon';

function getDataPokemons() {
  return axios
    .get(`${url}/?offset=0&limit=5`)
    .then((data) => data.data.results)
    .then((pokemonsList) => Promise.all((pokemonsList).map((pokemon) => axios
      .get(pokemon.url)
      .then((dataPokemon) => dataPokemon.data))));
}

export default { getDataPokemons };
