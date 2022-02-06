<template>
  <div class="pokedex">
    <img
      src="../assets/pokeballBack.png"
      alt="pokeball gray"
      class="pokeball-image"
    />
    <Header />
    <div class="pokedex__text-section">
      <h1 class="pokedex__principal-text">POKÉDEX</h1>
    </div>
    <PokemonList :pokemonsList="pokemonsList" />
    <nav class="pagination__nav" role="navigation" aria-label="pagination__nav">
        <a class="pagination-change" v-on:click="changePage(page-1)">Atrás</a>
        <ul class="pagination-list">
          <li>
            <a class="pagination-change-current">{{page}}</a>
          </li>
        </ul>
        <a class="pagination-change" v-on:click="changePage(page+5)">Siguiente</a>
      </nav>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import PokemonList from '../components/PokemonList.vue';

const axios = require('axios');

export default {
  name: 'Pokedex',
  components: {
    Header,
    PokemonList,
  },
  data() {
    return {
      pokemonsList: [],
      page: 0,
      pages: 200,
    };
  },
  mounted() {
    // Invocar método al iniciar la app
    this.fetch();
  },
  methods: {
    fetch() {
      const url = 'https://pokeapi.co/api/v2/pokemon';
      return axios
        .get(`${url}/?offset=${this.page}&limit=5`)
        .then((allData) => allData.data.results)
        .then((pokemonsList) => Promise.all(
          pokemonsList.sort().map((pokemon) => axios
            .get(pokemon.url).then((dataPokemon) => {
              this.pokemonsList.push(dataPokemon.data);
            })),
        ));
    },
    changePage(page) {
      this.page = (page <= 0 || page > this.pages) ? this.page : page;
      this.fetch();
    },
    cleanDiv() {

    },
  },
};
</script>

<style scoped>
.pokedex {
  position: relative;
  height: 90vh;
}
.pokeball-image {
  position: absolute;
  z-index: -1;
  width: 600px;
  left: -100px;
}
.pokedex__text-section {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
.pokedex__principal-text {
  color: #524f64;
  font-weight: 700;
  font-size: 3em;
  width: 30%;
  min-width: 300px;
  max-width: 500px;
  margin-top: 8vh;
}
.pagination__nav {
  margin-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pagination-list {
  list-style: none;
  width: 100px;
  padding: 0;
}
.pagination-change {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 4vh;
  border: 1px solid #524f64;
  font-size: 0.8em;
  color: #524f64;
  border-radius: 7px;
  box-shadow: 4px 4px 6px 1px rgb(0 0 0 / 15%);
  font-weight: bold;
}
.pagination-change:hover {
  color: orange;
  cursor: pointer;
}
</style>
