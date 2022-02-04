<template>
  <div class="hello">
    <Header mss="headersputs" />
    <h1>{{ msg }}</h1>
    <PokemonList  /> <!-- :dataPokemon='info' -->
  </div>
</template>

<script>
/* IMAGEN POKEMON:  sprites.other.official-artwork.front_default */
import Header from './Header.vue';
import PokemonList from './PokemonList.vue';

export default {
  name: 'Pokedex',
  props: {
    msg: String,
  },
  components: {
    Header,
    PokemonList,
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
