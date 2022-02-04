<template>
<router-view>
  <div class="pokedex">
    <Header />
    <div class="text-principal">
      <h1>ABOUT</h1>
    </div>
  </div>
  </router-view>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'AboutPokemon',
  props: {
  },
  components: {
    Header,
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
