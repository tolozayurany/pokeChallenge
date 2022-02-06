<template>
  <div class="pokedex">
    <img
      src="../assets/pokeballBack.png"
      alt="pokeball gray"
      class="pokeball-image"
    />
    <Header />
    <div class="text-principal">
      <h1>POKÉDEX</h1>
    </div>
    <PokemonList />
    <Pagination
      v-model="page"
      :records="500"
      :per-page="25"
      @paginate="myCallback"
    />
  </div>
</template>

<script>
import Pagination from 'v-pagination-3';
import Header from '../components/Header.vue';
import PokemonList from '../components/PokemonList.vue';

export default {
  name: 'Pokedex',
  components: {
    Header,
    PokemonList,
    Pagination,
  },
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pokedex {
  position: relative;
}
.pokeball-image {
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
h1 {
  color: #524f64;
  font-weight: 700;
  font-size: 3em;
  width: 30%;
  min-width: 300px;
  max-width: 500px;
}
</style>
