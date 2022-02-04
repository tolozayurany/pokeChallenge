<template>
  <div class="header-section">
    <header class="header">
      <section class="logo">
        <img src="..\assets\pokeball.png" alt="" />
        <h3>POKÉDEX</h3>
      </section>
      <nav>
        <li>Inicio</li>
        <li>Jugar</li>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.logo img{
  width: 30px;
  height: 30px;
  margin: 15px;
}

nav {
  display: flex;
  list-style: none;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
  margin: 10px;
  color: white;
  font-weight: bolder;
}
li {
  margin-left: 10px;
  width: 20%;
}

</style>
