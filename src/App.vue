<template>
  <header-app></header-app>
  <HomePage></HomePage>
  <results></results>
  <modals></modals>
</template>

<script>

import HeaderApp from './components/HeaderApp.vue'
import HomePage from './components/HomePage.vue';
import Modals from './components/Modals.vue';
import Results from './components/Results.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    HomePage,
    Results,
    Modals
  }
}

</script>

<style lang="scss" src="./assets/scss/main.scss">
</style>