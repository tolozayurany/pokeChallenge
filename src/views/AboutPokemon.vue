<template>
  <div class="about-pokemon__section">
    <img
        src="../assets/pokeballBack.png"
        alt="pokeball gray"
        class="pokeball-image">
    <Header />
    <PokemonInformation :pokemonInfo="pokemonInfo" />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import PokemonInformation from '../components/PokemonInformation.vue';

export default {
  name: 'AboutPokemon',
  props: {
    pokemonInfo: String,
  },
  components: {
    Header,
    PokemonInformation,
  },
};
</script>

<style scoped>
.about-pokemon__section {
  position: relative;
}
.pokeball-image{
  position: absolute;
  z-index: -1;
  width: 600px;
  left: -100px;
}
.text-principal {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
</style>
