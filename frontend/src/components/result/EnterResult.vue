<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-one-fifth">
        <b-field label="Opponent">
            <b-select
              v-model="selectedTeam"
              placeholder="Select a team"
              icon="user-friends"
              icon-pack="fas"
            >
              <option v-for="team in teamsLeftToPlay" :key="team.id" :value="team.id">{{ team.name }}</option>
            </b-select>
        </b-field>
      </div>

      <div class="column is-two-fifths" v-if="selectedTeam != null">
        <div class="columns">
          <div class="column has-text-weight-bold">Score</div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field class="has-text-centered" grouped>
              <b-field label="You" class="rightfield" expanded>
                  <b-numberinput v-model="enteredScores[0][0]" min="0" :max="scoreToWin" controls-position="compact" expanded></b-numberinput>
              </b-field>
              <b-field label="Opponent" class="leftfield" expanded>
                  <b-numberinput v-model="enteredScores[0][1]" min="0" :max="scoreToWin" controls-position="compact" expanded></b-numberinput>
              </b-field>
            </b-field>
            <b-field v-for="n in bestOf-1" :key="n" class="has-text-centered" grouped>
              <b-field class="rightfield" expanded>
                <b-numberinput v-model="enteredScores[n][0]" min="0" :max="scoreToWin" controls-position="compact" expanded></b-numberinput>
              </b-field>
              <b-field class="leftfield" expanded>
                <b-numberinput v-model="enteredScores[n][1]" min="0" :max="scoreToWin" controls-position="compact" expanded></b-numberinput>
              </b-field>
            </b-field>
          </div>
        </div>
      </div>
      <div class="column is-two-fifths" v-else></div>

      <div class="column is-one-fifth submitresult" v-if="selectedTeam != null">
        <b-button tag="router-link"
          to="/documentation"
          type="is-link"
          :disabled="submitDisabled"
        >
          Submit
        </b-button>
      </div>
      <div class="column is-one-fifth" v-else></div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bestOf: 3,
      scoreToWin: 7,
      teamsLeftToPlay: [
        {
          id: 1,
          name: 'Team 1'
        },
        {
          id: 2,
          name: 'Team 2'
        },
        {
          id: 3,
          name: 'Team 3'
        },
        {
          id: 4,
          name: 'Team 4'
        }
      ],
      selectedTeam: null,
      enteredScores: []
    }
  },
  computed: {
    submitDisabled: function () {
      let finalScoreCount = 0

      for (let i=0;i<this.enteredScores.length;i++) {
        if (this.enteredScores[i][0] === this.scoreToWin || this.enteredScores[i][1] === this.scoreToWin) finalScoreCount++
      }
      
      return finalScoreCount === this.bestOf ? false : true
    }
  },
  watch: {
    selectedTeam: function () {
      for (let i=1; i<=this.bestOf;i++){
        this.enteredScores.push([0, 0])
      }
    }
  }
}
</script>

<style>
div.submitresult {
  margin-top: auto;
  margin-bottom: 0.75rem;
  margin-left: 1rem;
}

div.field.rightfield {
  margin-right: 0.5em;
}

div.field.leftfield {
  margin-left: 0.5em;
}
</style>
