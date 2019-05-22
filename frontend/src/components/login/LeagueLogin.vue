<template>
  <section class="section">
    <div class="column is-one-third is-offset-one-third">
      <b-field
        label="League Name"
        :type="{ 'is-danger': hasError }"
      >
        <b-input type="text" maxlength="30" v-model="leagueName" required autofocus :disabled="this.isLoading" />
      </b-field>

      <b-field
        label="Password"
        :type="{ 'is-danger': hasError }"
      >
          <b-input type="password" maxlength="30" v-model="password" @keyup.native.enter="checkLogin" :disabled="this.isLoading" required />
      </b-field>

      <b-button @click.stop="checkLogin" :loading="this.isLoading">Send</b-button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'leaguelogin',
  data () {
    return {
      hasError: false,
      leagueName: '',
      password: ''
    }
  },
  computed: {
    ...mapState('user', [
      'isLoading',
    ]),
  },
  methods: {
    checkLogin () {
      if (this.leagueName != '1' || (this.password != 'user' && this.password != 'admin')) {
        this.hasError = true
        return
      }
      this.$store.dispatch('user/setLoading', true)
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
