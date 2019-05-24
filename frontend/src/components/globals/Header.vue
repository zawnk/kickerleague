<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link
        v-if="!this.isUserLoggedIn"
        class="navbar-item"
        to="/"
        exact
      >
        <b-icon
          icon="futbol"
          size="is-medium">
        </b-icon>
      </router-link>
      <div v-if="this.isUserLoggedIn" class="navbar-item">
        <b-icon
          icon="futbol"
          size="is-medium">
        </b-icon>
      </div>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">

        <router-link
          v-if="this.isUserLoggedIn"
          class="navbar-item"
          :to="{ name: 'leaguehome', params: { leagueId: this.$route.params.leagueId } }"
          exact
        >
          Home
        </router-link>


        <router-link
          v-if="this.isUserLoggedIn"
          class="navbar-item"
          :to="{ name: 'resultentry', params: { leagueId: this.$route.params.leagueId } }"
        >
          Enter results
        </router-link>

        <div v-if="this.isUserLoggedIn" class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            League
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              Standings
            </a>
            <a class="navbar-item">
              Match History
            </a>
            <a class="navbar-item">
              Stats
            </a>
            <a class="navbar-item">
              Details
            </a>
          </div>
        </div>

        <div v-if="this.isUserLoggedIn" class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Teams
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              View Schedule
            </a>
            <a class="navbar-item">
              Manage
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <a v-if="this.isUserLoggedIn" class="navbar-item">
          Rulebook
        </a>
        <div class="navbar-item">
          <a class="button is-secondary" v-if="!this.isUserLoggedIn">
            <router-link to="/login">
              Log in
            </router-link>
          </a>
          <div v-if="this.isUserLoggedIn" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Hi, name!
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                Settings
              </a>
              <a class="navbar-item">
                Create League
              </a>
              <router-link class="navbar-item" to="/logout">
                Log out
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'pageheader',
  computed: {
    ...mapState('auth', ['isUserLoggedIn'])
  },
  mounted() {
    let navbar = document.querySelector('.navbar-burger')
    navbar.addEventListener('click', function () {
      let target = navbar.dataset.target
      let $target = document.getElementById(target)
      navbar.classList.toggle('is-active')
      $target.classList.toggle('is-active')
    })
  }
}
</script>

<style>

</style>
