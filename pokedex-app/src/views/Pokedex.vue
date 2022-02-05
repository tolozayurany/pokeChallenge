<template>
  <div class="pokedex">
    <Header />
    <div class="text-principal">
      <h1> POKÉDEX </h1>
    </div>
    <PokemonList  />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import PokemonList from '../components/PokemonList.vue';

export default {
  name: 'Pokedex',
  components: {
    Header,
    PokemonList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-principal {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
h1 {
  color: #524F64;
  font-weight: 700;
  font-size: 3em;
  width: 30%;
  min-width: 300px;
  max-width: 500px;
}

</style>
