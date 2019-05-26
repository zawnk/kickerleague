<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <b-field
          label="E-Mail"
        >
          <b-input
            type="email"
            v-model="mail"
            :disabled="this.isLoading"
            required
          ></b-input>
        </b-field>
        
        <b-field>
          <template slot="label">
            <b-tooltip label="Shown to all users. Can be changed any time." animated dashed>
              Display Name
            </b-tooltip>
          </template>
          <b-input
            type="text"
            v-model="displayName"
            :disabled="this.isLoading"
            required
          ></b-input>
        </b-field>

        <b-field
          label="Password"
        >
          <b-input
            type="password"
            v-model="password"
            :disabled="this.isLoading"
            required
          ></b-input>
        </b-field>

        <b-field
          label="Confirm Password"
        >
          <b-input
            type="password"
            v-model="confirmedPassword"
            @keyup.native.enter="signup"
            :disabled="this.isLoading"
            required
          ></b-input>
        </b-field>
        
        <b-button class="is-pulled-right" @click.stop="signup" :loading="this.isLoading">Submit</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'signup',
  data () {
    return {
      mail: '',
      password: '',
      confirmedPassword: '',
      displayName: ''
    }
  },
  computed: {
    ...mapState('user', [
      'isLoading',
    ]),
  },
  methods: {
    ...mapActions('user', [
      'setLoading'
    ]),
    signup() {
      this.setLoading(true)
      setTimeout(() => {
        this.setLoading(false)
        const success = Math.random() > 0.5 ? true : false
        this.$toast.open({
          duration: 3000,
          message: success ? `Registration failed, please try again shortly` : 'Everything worked out, you\'re now registered',
          position: 'is-bottom',
          type: success ? 'is-danger' : 'is-success'
        })
        }, 2000)
    },
  }
}
</script>

<style>

</style>
