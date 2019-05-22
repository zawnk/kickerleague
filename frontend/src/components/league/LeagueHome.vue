<template>
  <div class="column">
    League {{ this.$route.params.leagueId }} Home<br/>
    User: {{ this.$store.state.auth.token }}
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
