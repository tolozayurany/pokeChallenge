<template>
  <div class="pokedex">
    <div class="text-principal">
      <h2>{{
          `${pokemonInfoObject.name.charAt(0).toUpperCase()}${pokemonInfoObject.name.slice(1)}`
           }}
      </h2>
    </div>
        <img
        :src="pokemonInfoObject.sprites.other['official-artwork'].front_default"
        :alt="pokemonInfoObject.name">
        <ul v-for="ability in pokemonInfoObject.abilities" :key="ability.name">
            <li>{{ability.ability.name}}</li>
        </ul>
  </div>
</template>

<script>

export default {
  name: 'PokemonInformation',
  props: {
    pokemonInfo: String,
  },
  components: {
  },
  data() {
    return {
      pokemonInfoObject: JSON.parse(this.pokemonInfo),
    };
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
h2 {
  color: #524F64;
  font-weight: 700;
  font-size: 3em;
  width: 30%;
  min-width: 300px;
  max-width: 500px;
}

</style>
