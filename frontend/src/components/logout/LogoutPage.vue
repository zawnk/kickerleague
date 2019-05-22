<template>
  <div>
    {{ this.message }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Successfully logged out!'
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/clear')
    }
  },
  mounted () {
    this.logout()
  }
}
</script>

<style scoped>

</style>