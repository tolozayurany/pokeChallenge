<template>
  <section class="pokemons-section">
    <ul
      v-for="pokemon in pokemonsList"
      :key="pokemon.name"
      class="pokemon-card"
    >
      <router-link
        :to="{
          name: 'about',
          params: {
            id: pokemon.name,
            pokemonInfo: JSON.stringify(pokemon),
          },
        }"
        tag="div"
        class="pokemon-card__link"
      >
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          :alt="pokemon.name"
          class="pokemon-card__image"
        />
        <div class="pokemon-card__text">
          <li class="text--principal">
            {{
              `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`
            }}
          </li>
          <li class="text--secondary">No. {{ pokemon.id }}</li>
          <div class="pokemon-card__types-pokemon">
            <ul
              v-for="type in pokemon.types"
              :key="type.slot"
              class="types-pokemon--padding"
            >
              <li class="types-pokemon__tags">
                {{
                  `${type.type.name
                    .charAt(0)
                    .toUpperCase()}${type.type.name.slice(1)}`
                }}
              </li>
            </ul>
          </div>
        </div>
      </router-link>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'CardPokemon',
  props: {
    pokemonsList: Object,
  },
};
</script>

<style scoped>
.pokemons-section {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
}
.pokemon-card {
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
  transition: all 0.2s ease-in-out;
}
.pokemon-card:hover {
  transform: scale(1.1);
}
.pokemon-card__link {
  text-decoration: none;
}
.pokemon-card__image {
  width: 70%;
}
.pokemon-card__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-left: 20px;
}
.text--principal {
  font-weight: 600;
  font-size: 1.3em;
  color: #646161;
}
.text--secondary {
  display: inline-block;
  margin: 0;
  color: #646161;
  font-size: 1em;
}
.pokemon-card__types-pokemon {
  display: flex;
  align-items: center;
  padding: 0;
  height: 7vh;
  width: 90%;
}
.types-pokemon--padding {
  padding: 0;
  width: 90%;
}
.types-pokemon__tags {
  display: flex;
  justify-content: center;
  width: 80%;
  margin:0;
  border-radius: 7px;
  background-color: #524f64;
  color: #ffffff;
  font-size: 0.9em;
  box-shadow: 4px 4px 6px 1px rgba(0, 0, 0, 0.1);
}

</style>
