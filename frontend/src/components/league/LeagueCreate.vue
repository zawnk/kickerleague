<template>
  <div class="section">
    <div class="column">
      <h1 class="title has-text-left">Create A League</h1>
    </div>
    <div class="columns is-centered">
      <div class="column is-one-third">
        <b-field
          label="League Name*"
        >
          <b-input
            type="text"
            v-model="leagueName"
            :disabled="this.isLoading"
            maxlength="30"
            required

          ></b-input>
        </b-field>

        <b-field
          label="Minimum number of players per team*"
        >
          <b-numberinput
            v-model="minPlayersPerTeam"
            :disabled="this.isLoading"
            required
            min="1"
            controls-position="compact"
            expanded
          ></b-numberinput>
        </b-field>

        <b-field
          label="Maximum number of players per team"
          :type="{ 'is-danger': errors.has('maximum players') }"
          :message="errors.first('maximum players')"
        >
          <b-input
            type="number"
            data-vv-name="maximum players"
            v-model="maxPlayersPerTeam"
            :disabled="this.isLoading"
            v-validate="`required|min_value:${this.minPlayersPerTeam}`"
          ></b-input>
        </b-field>

        <b-field>
          <template slot="label">
            <b-tooltip label="The amount of goals a team has to score to win a set. (Recommendation: 7)" animated dashed>
              Score to win*
            </b-tooltip>
          </template>
          <b-numberinput
            class="test"
            v-model="scoreToWin"
            :disabled="this.isLoading"
            min="1"
            controls-position="compact"
            required
          ></b-numberinput>
        </b-field>

        <b-field>
          <template slot="label">
            <b-tooltip label="The amount of sets that have to be played in a match. Needs to be uneven. (Recommendation: 3)" animated dashed>
              Sets per match*
            </b-tooltip>
          </template>
          <b-input
            type="number"
            v-model="setsPerMatch"
            :disabled="this.isLoading"
            min="1"
            required
          ></b-input>
        </b-field>

        <b-field>
          <template slot="label">
            <b-tooltip label="If enabled, all sets have to be played off, even if a team won enough sets in a match." animated dashed>
              Full sets
            </b-tooltip>
          </template>
          <b-checkbox
            v-model="fullSets"
            :disabled="this.isLoading"
          ></b-checkbox>
        </b-field>

        <b-field>
          <template slot="label">
            <b-tooltip label="The amount of points that the winning team gets. (Recommendation: 3)" animated dashed>
              Points for win*
            </b-tooltip>
          </template>
          <b-input
            type="number"
            v-model="pointsForWin"
            :disabled="this.isLoading"
            min="1"
            required
          ></b-input>
        </b-field>

        <b-field>
          <template slot="label">
            <b-tooltip label="If enabled, a password is required to join/create teams." animated dashed>
              Private league
            </b-tooltip>
          </template>
          <b-checkbox
            v-model="privateLeague"
            :disabled="this.isLoading"
          ></b-checkbox>
        </b-field>

        <b-field
          :label="`League password${privateLeague ? '*': ''}`"
        >
          <b-input
            type="text"
            v-model="leaguePassword"
            :required="privateLeague"
            :disabled="!privateLeague || this.isLoading"
          ></b-input>
        </b-field>
        <p class="control">
          <b-button class="is-pulled-left" @click.stop="clear" :loading="this.isLoading">Clear</b-button>
          <b-button class="is-pulled-right" @click.stop="signup" :loading="this.isLoading">Submit</b-button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
 data() {
   return {
     leagueName: '',
     minPlayersPerTeam: 1,
     maxPlayersPerTeam: null,
     scoreToWin: 1,
     setsPerMatch: null,
     pointsForWin: null,
     fullSets: false,
     privateLeague: false,
     leaguePassword: ''
   }
 },
  computed: {
    ...mapState('user', [
      'isLoading',
    ]),
  },
  methods: {
    clear() {
      this.leagueName = '',
      this.minPlayersPerTeam = null,
      this.maxPlayersPerTeam = null,
      this.scoreToWin = null,
      this.setsPerMatch = null,
      this.pointsForWin = null,
      this.fullSets = false,
      this.privateLeague = false,
      this.leaguePassword = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~bulma/sass/utilities/_all";

  div.b-numberinput.test {
    margin-left: $gap/2;
  }
</style>
