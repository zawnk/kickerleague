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

<style>
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
</style>
