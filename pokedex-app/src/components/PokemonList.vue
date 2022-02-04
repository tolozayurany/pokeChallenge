<template>
  <div class="pokemon-section">
    <h3>{{ pokemonInfo }}</h3>
    <section class="pokedex">
      <div v-if="!pokemonsList" class="show-wait-message">
        Loading please wait...
      </div>
      <div v-else class="show-pokemons-list">
        <ul
          v-for="pokemon in pokemonsList"
          :key="pokemon.name"
          class="card-pokemon"
        >
          <img
            :src="pokemon.sprites.other['official-artwork'].front_default"
            :alt="pokemon.name"
          />
          <div class="card-text">
            <li class="cartd-text-principal">
              {{
                `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`
              }}
            </li>
            <li>No. {{ pokemon.id }}</li>
            <ul
              v-for="type in pokemon.types"
              :key="type.slot"
              class="pokemon-type"
            >
              <li>{{ type.type.name }}</li>
            </ul>
          </div>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import api from '../api';

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
    api.getDataPokemons().then((pokemons) => {
      this.pokemonsList = pokemons;
    });
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.pokemon-section {
  display: flex;
}
.show-pokemons-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
}
.card-pokemon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  width: 15%;
  min-width: 220px;
  height: 40vh;
  padding: 0;
  background: #ffffff;
  box-shadow: 4px 4px 6px 2px rgba(0, 0, 0, 0.15);
  border-radius: 18px;
}
.card-pokemon img {
  width: 70%;
}
.card-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-left: 30px;
}
.cartd-text-principal{
  font-weight: 600;
  font-size: 1.3em;
  color: #646161;
}
li {
  display: inline-block;
  margin: 0 10px;
  color: #646161;
  font-size: 1em;
}
.pokemon-type {
  display: flex;
  padding: 0;
  border: 1px solid rgb(255, 0, 149);
}
</style>
