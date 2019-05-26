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
import { mapActions } from 'vuex'
import PageHeader from './components/globals/Header'
import PageFooter from './components/globals/Footer'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  },
  methods: {
    ...mapActions('user', [
      'setLoading'
    ]),
  },
  created() {
    this.setLoading(true)
  },
  mounted() {
    // When a new page is opened, reset the loading state back to not loading, no matter what
    this.setLoading(false)
  }
}
</script>

<style lang="scss">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
}

main {
    padding-top: 60px;
  }

// Fonts
@import url('https://fonts.googleapis.com/css?family=Nunito:400,400i,700,700i&display=swap');
$family-sans-serif: "Nunito", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;

// Bulma customization
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

$primary: $turquoise;
$primary-invert: findColorInvert($primary);
$navbar-item-hover-background-color: $white-ter;

$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

// *:not(path):not(g) {
//     color:                    hsla(210, 100%, 100%, 0.9) !important;
//     background:               hsla(210, 100%,  50%, 0.5) !important;
//     outline:    solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
//     box-shadow: none !important;
// }

// Bottom notices need to be above footer
div.notices.is-bottom {
  margin-bottom: 150px;
}
</style>
