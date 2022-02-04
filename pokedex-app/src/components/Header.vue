<template>
  <div class="header-section">
    <header>
        <h3>PokéChall</h3>
        <nav>
            <li>Inicio</li>
            <li>Juegos</li>
        </nav>
    </header>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    mss: String,
  },
  data: () => ({
    active: 0,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    display: flex;
}
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
