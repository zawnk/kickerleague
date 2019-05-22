<template>
  <section class="section">
    <div class="column is-one-third is-offset-one-third">
      <b-field
        label="League Name"
        :type="{ 'is-danger': hasError }"
      >
        <input type="text" maxlength="30" v-model="leagueName" required class="input" autofocus>
      </b-field>

      <b-field
        label="Password"
        :type="{ 'is-danger': hasError }"
      >
          <input class="input" type="password" maxlength="30" v-model="password" @keyup.enter="checkLogin" required />
      </b-field>

      <button class="button" @click.stop="checkLogin">Send</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'leaguelogin',
  data () {
    return {
      hasError: false,
      leagueName: '',
      password: ''
    }
  },
  methods: {
    checkLogin () {
      if (this.leagueName != '1' || (this.password != 'user' && this.password != 'admin')) {
        this.hasError = true
        return
      }

      this.hasError = false
      if (this.password === 'user') {
        this.$store.dispatch('auth/setToken', 'user1')
      } else {
        this.$store.dispatch('auth/setToken', 'admin1')
      }

      this.$router.push({ name: 'leaguehome', params: { leagueId: 1 } })
    }
  }
}
</script>

<style>

</style>
