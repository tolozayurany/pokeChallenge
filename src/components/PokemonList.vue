<template>
  <div class="pokemon-section">
      <div v-if="!pokemonsList" class="show-wait-message">
        Loading please wait...
      </div>
      <div v-else>
        <CardPokemon :pokemonsList="pokemonsList" />
      </div>
  </div>
</template>

<script>
import CardPokemon from './CardPokemon.vue';

export default {
  name: 'PokemonList',
  props: {
    pokemonsList: Object,
  },
  components: {
    CardPokemon,
  },
};
</script>

<style scoped>
.pokemon-section {
  display: flex;
}
</style>
