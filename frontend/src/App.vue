<template>
  <div id="app">
    <page-header />
    <main>
      <router-view />
    </main>
    <page-footer />
  </div>
</template>

<script>
import PageHeader from './components/globals/Header'
import PageFooter from './components/globals/Footer'
export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="scss">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
}

main {
    padding-top: 60px;
  }

// Bulma customization
// Import Bulma's core
// @import "~bulma/sass/utilities/_all";

// $colors: (
//     "white": ($white, $black),
//     "black": ($black, $white),
//     "light": ($light, $light-invert),
//     "dark": ($dark, $dark-invert),
//     "primary": ($primary, $primary-invert),
//     "info": ($info, $info-invert),
//     "success": ($success, $success-invert),
//     "warning": ($warning, $warning-invert),
//     "danger": ($danger, $danger-invert),
//     // "twitter": ($twitter, $twitter-invert)
// );

// // $primary: #3AAFA9;
// $primary-invert: findColorInvert($primary);
// // $primary-invert: #17252A;

// // $secondary: #17252A;
// // $secondary-invert: findColorInvert($secondary);

// // Import Bulma and Buefy styles
// @import "~bulma";
// @import "~buefy/src/scss/buefy";
</style>
