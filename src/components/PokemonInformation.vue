<template>
  <section class="pokemon-section">
    <section class="pokemon-details">
      <h2 class="pokemon-section__principal-text">
        {{
          `${pokemonInfoObject.name
            .charAt(0)
            .toUpperCase()}${pokemonInfoObject.name.slice(1)}`
        }}
      </h2>
      <section class="pokemon-description__text"
          v-for="description in pokemonDescription"
          :key="description.name
          "
       >
        <p v-if="description.language.name=='es'">
          {{ description.flavor_text}}
        </p>
      </section>
      <p class="pokemon-details__title-abilities">Habilidades</p>
      <div class="pokemon-details__abilities">
        <ul
          v-for="ability in pokemonInfoObject.abilities"
          :key="ability.name"
          class="pokemon-abilities__list"
        >
          <li class="abilities-pokemon__tags">
            {{
              `${ability.ability.name.charAt(0).toUpperCase()}${ability.ability.name.slice(1)}`
            }}
          </li>
        </ul>
      </div>
    </section>
    <section class="pokemon-image__section">
      <img
        :src="pokemonInfoObject.sprites.other['official-artwork'].front_default"
        :alt="pokemonInfoObject.name"
        class="pokemon-image--width"
      />
    </section>
  </section>
</template>

<script>

const axios = require('axios');

export default {
  name: 'PokemonInformation',
  props: {
    pokemonInfo: String,
  },
  data() {
    return {
      pokemonInfoObject: JSON.parse(this.pokemonInfo),
      pokemonDescription: null,
    };
  },
  mounted() {
    return axios
      .get(`${this.pokemonInfoObject.species.url}`)
      .then((allData) => {
        this.pokemonDescription = allData.data.flavor_text_entries;
      });
  },
};
</script>

<style scoped>
.pokemon-section {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.pokemon-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;
  margin-left: 80px;
}
.pokemon-section__principal-text {
  color: #524f64;
  font-weight: 700;
  text-align: left;
  font-size: 3em;
  width: 30%;
  min-width: 300px;
  max-width: 500px;
}
.pokemon-image__section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58%;
  height: 80vh;
}
.pokemon-image--width {
  width: 58%;
}
.pokemon-description__text {
  width: 90%;
  text-align: left;
  color: #646161;
}
.pokemon-details__title-abilities {
  font-weight: 600;
  font-size: 1.0em;
  color: #646161;
  text-align: left;
}
.pokemon-details__abilities {
  display: flex;
  align-items: center;
  padding: 0;
  height: 7vh;
  width: 90%;
}
.pokemon-abilities__list {
  padding: 0;
  width: 90%;
}
.abilities-pokemon__tags {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0;
  border-radius: 7px;
  background-color: #524f64;
  color: #ffffff;
  font-size: 0.9em;
  box-shadow: 4px 4px 6px 1px rgba(0, 0, 0, 0.1);
}
</style>
