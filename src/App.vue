<template>
  <header-app></header-app>
  <HelloPage></HelloPage>
  <modals></modals>
</template>

<script>

import HeaderApp from './components/HeaderApp.vue'
import HelloPage from './components/HelloPage.vue';
import Modals from './components/Modals.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    HelloPage,
    Modals
  }
}

</script>

<style lang="scss" src="./assets/sass/style.scss">
</style>