import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
/* import router from './router'; */

/* import { store } from './store'; */
import Pokedex from './views/Pokedex.vue';
/* import AboutPokemon from './views/AboutPokemon.vue'; */
import AboutPokemon from './views/AboutPokemon.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Pokedex },
    { path: '/about', component: AboutPokemon, props: true },
  ],
});

const app = createApp(App);
app.use(router);
/* app.use(store) */
app.mount('#app');
