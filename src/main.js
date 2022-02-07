import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';

import Pokedex from './views/Pokedex.vue';
import AboutPokemon from './views/AboutPokemon.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Pokedex,
    },
    {
      path: '/about/:id',
      name: 'about',
      component: AboutPokemon,
      props: true,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
