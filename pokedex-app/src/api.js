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

/* function getDataPokemons() {
    return axios
        .get(`${url}/?offset=0&limit=5`)
        .then((response) => response.data.results)
        .then (result => result)
}
function getDataByPokemon() {
    return getDataPokemons().then((pokemons) => {
    const data = []
        let mapPokemons = pokemons.forEach(element => {
            axios
                .get(element.url)
                .then((response) => response.data.name)
        });
    });
} */

/* getDataByPokemon().then(res => console.log(res));

console.log(data); */

export default { getDataPokemons };
/*
getDataPokemons().then(res => console.log(res)); */
