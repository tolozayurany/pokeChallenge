<template>
  <div class="pokemon-section">
    <h3>{{ pokemonInfo }}</h3>
    <section class="pokedex">
      <div v-if="!pokemonsList" class="show-wait-message">
        Loading please wait...
      </div>
      <div v-else >
        <CardPokemon :pokemonsList="pokemonsList" />
      </div>
    </section>
  </div>
</template>

<script>
import api from '../api';
import CardPokemon from './CardPokemon.vue';

export default {
  name: 'PokemonList',
  props: {
  },
  components: {
    CardPokemon,
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
</style>
