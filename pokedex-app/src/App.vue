<template>
  <div>
    <Pokedex msg="POKÉDEX" />
  </div>
</template>

<script>

import Pokedex from './components/Pokedex.vue';

export default {
  name: 'App',
  components: {
    Pokedex,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Poppins', sans-serif;
}
body {
  padding: 0;
  margin: 0;
}
</style>
