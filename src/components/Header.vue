<template>
  <div class="header-section">
    <header class="header">
      <section class="logo">
        <img
        src="..\assets\pokeball.png"
        class="logo__image"
        alt="pokeball-icon" />
        <h3>POKÉDEX</h3>
      </section>
      <nav class="header-navigation">
        <li class="header-navigation__list">
          <router-link class="navigation-link" to="/">
        Inicio
        </router-link></li>
        <li class="header-navigation__list" >
          <a class="navigation-link"
             href="https://www.pokemon.com/el/app/">Jugar
          </a>
        </li>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {},
};
</script>

<style scoped>
.header {
  display: flex;
  background-color: #524f64;
  border-radius: 0 0 15px 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.logo {
  display: flex;
  align-items: center;
  width: 50%;
  color: white;
  font-size: 1.2em;
}
.logo__image {
  width: 30px;
  height: 30px;
  margin: 15px;
}
.header-navigation {
  display: flex;
  list-style: none;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
  margin: 10px;
  color: white;
  font-weight: bolder;
}
.header-navigation__list {
  margin-left: 10px;
  width: 20%;
}
.navigation-link {
  text-decoration: none;
}
.navigation-link:hover {
  color: orange;
  cursor: pointer;
}
.navigation-link:active {
  text-decoration: none;
  color: white;
}
.navigation-link:visited {
  text-decoration: none;
  color: white;
}
</style>
