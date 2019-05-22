<template>
  <div id="app">
    <page-header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import PageHeader from './components/globals/Header'
export default {
  name: 'app',
  components: {
    PageHeader,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

main {
    padding-top: 60px;
  }

// Bulma customization
// Import Bulma's core
// @import "~bulma/sass/utilities/_all";

// $primary: #3AAFA9;
// $primary-invert: findColorInvert($primary);
// $primary-invert: #17252A;

// $secondary: #17252A;
// $secondary-invert: findColorInvert($secondary);

// Import Bulma and Buefy styles
// @import "~bulma";
// @import "~buefy/src/scss/buefy";
</style>
