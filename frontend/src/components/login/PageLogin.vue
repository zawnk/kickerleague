<template>
  <div class="section">
    <div class="column is-one-third is-offset-one-third">
      <b-field>
          <b-input
            type="email"
            placeholder="Email"
            v-model="leagueName"
            :disabled="this.isLoading"
            icon="fas fa-envelope"
            required
            autofocus
          />
      </b-field>
      <b-field>
          <b-input
            type="password"
            placeholder="Password"
            v-model="password"
            :disabled="this.isLoading"
            icon="fas fa-lock"
            required
            @keyup.native.enter="checkLogin"
          />
      </b-field>

      <p class="control is-pulled-right">
        <b-button @click.stop="checkLogin" :loading="this.isLoading">Submit</b-button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'pagelogin',
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
  },
  mounted () {
    let input = document.querySelector('[autofocus]');
    if (input) {
      input.focus()
    }
  }
}
</script>

<style>

</style>
