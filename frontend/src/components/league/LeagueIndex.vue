<template>
  <div class="section leagueindex">
    <div class="column">
      <h1 class="title has-text-left">Your Leagues</h1>
    </div>
    <div class="columns">
      <div class="column is-three-fifths-desktop is-offset-one-fifth-desktop" id="playerleagues">
        <h1 class="subtitle">Looks like you're playing in these leagues:</h1>

        <b-table
          :data="playerLeagues"
        >
          <template slot-scope="props">
            <b-table-column field="name" label="Name" sortable>
              {{ props.row.name }}
            </b-table-column>
            <b-table-column field="teams" label="Teams" sortable centered>
              {{ props.row.teams }}
            </b-table-column>
            <b-table-column field="team" label="Your Team" sortable>
              {{ props.row.team }}
            </b-table-column>
            <b-table-column field="matchesPlayed" label="Matches Played" sortable centered>
              {{ props.row.matchesPlayed }}/{{ props.row.teams - 1 }}
            </b-table-column>
            <b-table-column field="join" label="">
              <b-button
                tag="router-link"
                :to="{ name: 'leaguehome', params: { leagueId: props.row.id } }"
                size="is-small"
                icon-right="fas fa-angle-right"
              >
                View
              </b-button>
            </b-table-column>
          </template>
        </b-table>
      </div>
    </div>

    <div class="columns">
      <div class="column is-three-fifths-desktop is-offset-one-fifth-desktop">
        <h1 class="subtitle">Other leagues you might be interested in:</h1>

        <b-table
          :data="openLeagues"
        >
          <template slot-scope="props">
            <b-table-column field="name" label="Name" sortable>
              {{ props.row.name }}
            </b-table-column>
            <b-table-column field="teams" label="Teams" sortable centered>
              {{ props.row.teams }}
            </b-table-column>
            <b-table-column field="join" label="">
              <b-button
                tag="router-link"
                :to="{ name: 'leaguehome', params: { leagueId: props.row.id } }"
                size="is-small"
                icon-right="fas fa-angle-right"
              >
                View
              </b-button>
            </b-table-column>
          </template>
        </b-table>
      </div>
    </div>

    <div class="columns createleague">
      <div class="column is-three-fifths-desktop is-offset-one-fifth-desktop">
        <p class="control is-pulled-right">
          <b-button :to="{ name: 'leaguecreate' }" tag="router-link">Create Your Own</b-button>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      playerLeagues: [
        {
          id: 1,
          name: 'League1',
          team: 'CrazyPair',
          teams: 16,
          matchesPlayed: 12
        },
        {
          id: 321,
          name: 'League2',
          team: 'CrazyPair2',
          teams: 12,
          matchesPlayed: 10
        }
      ],
      openLeagues: [
        {
          id: 111,
          name: 'ForeignLeague',
          teams: 16,
        },
        {
          id: 112,
          name: 'ForeignLeague2',
          teams: 14,
        },
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/_all";

  div#playerleagues {
    margin-bottom: $gap;
  }

  div.createleague {
    margin-top: $gap;
  }
</style>
