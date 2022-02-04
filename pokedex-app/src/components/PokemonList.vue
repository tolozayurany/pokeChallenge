<template>
  <div class="pokemon-section">
    <h3>pokemones</h3>
    <h3>{{ pokemonInfo }}</h3>
    <div v-if="!pokemonsList">Loading Please wait...</div>
    <div v-else>
      <ul>
        <li
          v-for="pokemon in pokemonsList"
          v-bind:key="pokemon.name"
        >{{ pokemon.name }}
        {{pokemon.base_experience}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '../api';

/* const axios = require('axios'); */

export default {
  name: 'PokemonList',
  props: {
    dataPokemon: Object,
  },
  data() {
    return {
      pokemonsList: [],
      pokemonInfo: null,
    };
  },
  created() {
    api.getDataPokemons().then((pokemons) => { this.pokemonsList = pokemons; });
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  display: flex;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
