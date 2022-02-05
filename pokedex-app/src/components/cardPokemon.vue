<template>
  <div class="show-pokemons-list">
    <ul
      v-for="pokemon in pokemonsList"
      :key="pokemon.name"
      class="card-pokemon"
    >
      <router-link to="/about" tag="div" >
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
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CardPokemon',
  props: {
    pokemonsList: Object,
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
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
  transition: all .2s ease-in-out;
}
.card-pokemon:hover {
  transform: scale(1.1);
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
.cartd-text-principal {
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
