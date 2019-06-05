<template>
  <div class="section leaguehome">
    <div class="column">
      <h1 class="title has-text-left">{{ name }} home</h1>
    </div>

    <div class="columns is-vcentered is-centered is-variable is-6">
      <div class="column is-narrow">
        <article class="message is-secondary">
          <div class="message-header">
            <p>Current streaks:</p>
          </div>
          <div class="message-body has-text-left">
            <ul>
              <li>team name with 20 ch @ <span class="has-text-primary">+2</span></li>
              <li>team D @ <span class="has-text-danger">-2</span></li>
            </ul>
          </div>
        </article>
      </div>

      <div class="column is-three-fifths">
        <b-table
          :data="standings"
          hoverable
        >
          <template slot-scope="props" slot="header">
              <b-tooltip :active="!!props.column.meta" :label="props.column.meta" animated dashed>
                  {{ props.column.label }}
              </b-tooltip>
          </template>

          <template slot-scope="props">
            <b-table-column field="position" label="P" meta="Position" sortable>
              {{ props.row.position }}
            </b-table-column>
            <b-table-column field="team" label="Name" meta="" sortable>
              {{ props.row.team }}
            </b-table-column>
            <b-table-column field="wins" label="W" meta="Wins" sortable centered>
              {{ props.row.wins }}
            </b-table-column>
            <b-table-column field="losses" label="L" meta="Losses" sortable>
              {{ props.row.losses }}
            </b-table-column>
            <b-table-column field="trend" label="Trend" meta="" centered>
              <span v-for="(t, index) in props.row.trend" :key="index" :class="[t ? 'has-background-primary' : 'has-background-danger', 'trend']" />
            </b-table-column>
            <b-table-column field="points" label="Pts" meta="Points" sortable centered>
              {{ props.row.points }}
            </b-table-column>
          </template>
        </b-table>
      </div>

      <div class="column is-narrow">
        <article class="message is-secondary">
          <div class="message-header">
            <p>All-time streaks:</p>
          </div>
          <div class="message-body has-text-left">
            <ul>
              <li>team A @ <span class="has-text-primary">+6</span></li>
              <li>team E @ <span class="has-text-danger">-5</span></li>
            </ul>
          </div>
        </article>
      </div>
    </div>

    <div class="column">
      <div class="content has-text-centered"><strong>Last 20 Matches</strong></div>
      <div class="columns is-centered">
        <div class="column is-one-third">
          <ul>
            <li v-for="match in history.slice(0, 10)" :key="match.timestamp">{{ match.teams[match.winner] }} beat {{ match.teams[1 - match.winner] }} with {{ match.accumulatedScore }} <span class="is-size-7 has-text-grey is-hidden-tablet-only">{{ timestampToReadableString(match.timestamp) }}</span></li>
          </ul>
        </div>
        <div class="column is-one-third">
          <ul>
            <li v-for="match in history.slice(10, 20)" :key="match.timestamp">{{ match.teams[match.winner] }} beat {{ match.teams[1 - match.winner] }} with {{ match.accumulatedScore }} <span class="is-size-7 has-text-grey is-hidden-tablet-only">{{ timestampToReadableString(match.timestamp) }}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

export default {
  data() {
    return {
      name: 'LeagueName',
      standings: [
        {
          position: 1,
          team: 'team name with 20 ch',
          wins: 10,
          losses: 7,
          trend: [1,1,1,0,1],
          points: 30
        },
        {
          position: 2,
          team: 'team B',
          wins: 8,
          losses: 9,
          trend: [1,0,1,0,1],
          points: 24
        },
        {
          position: 3,
          team: 'team C',
          wins: 6,
          losses: 11,
          trend: [1,1,0,0,1],
          points: 18
        },
        {
          position: 4,
          team: 'team D',
          wins: 4,
          losses: 13,
          trend: [0,1,1,0,0],
          points: 12
        },
        {
          position: 5,
          team: 'team E',
          wins: 2,
          losses: 15,
          trend: [0,0,0,0,1],
          points: 6
        },
      ],
      history: [
        {
          teams: [
            'team name with 20 ch',
            'team name with 20 ch'
          ],
          winner: 0,
          accumulatedScore: '21-5',
          timestamp: '2019-05-24T22:17:45.162Z'
        },
        {
          teams: [
            'team A',
            'team E'
          ],
          winner: 1,
          accumulatedScore: '12-21',
          timestamp: '2019-05-24T20:17:45.162Z'
        },
        {
          teams: [
            'team C',
            'team D'
          ],
          winner: 0,
          accumulatedScore: '21-17',
          timestamp: '2019-05-24T12:17:45.162Z'
        },
        {
          teams: [
            'team B',
            'team C'
          ],
          winner: 1,
          accumulatedScore: '11-21',
          timestamp: '2019-05-23T22:17:45.162Z'
        },
        {
          teams: [
            'team A',
            'team D'
          ],
          winner: 0,
          accumulatedScore: '21-15',
          timestamp: '2019-01-24T22:17:45.162Z'
        },
        {
          teams: [
            'team A',
            'team E'
          ],
          winner: 0,
          accumulatedScore: '21-5',
          timestamp: '2019-03-24T22:17:45.162Z'
        },
        {
          teams: [
            'team A',
            'team E'
          ],
          winner: 1,
          accumulatedScore: '12-21',
          timestamp: '2019-01-24T20:17:45.162Z'
        },
        {
          teams: [
            'team C',
            'team D'
          ],
          winner: 0,
          accumulatedScore: '21-17',
          timestamp: '2018-05-24T12:17:45.162Z'
        },
        {
          teams: [
            'team B',
            'team C'
          ],
          winner: 1,
          accumulatedScore: '11-21',
          timestamp: '2018-03-23T22:17:45.162Z'
        },
        {
          teams: [
            'team A',
            'team D'
          ],
          winner: 0,
          accumulatedScore: '21-15',
          timestamp: '2013-02-24T22:17:45.162Z'
        },
        {
          teams: [
            'team A',
            'team E'
          ],
          winner: 0,
          accumulatedScore: '21-5',
          timestamp: '2019-05-24T22:17:45.162Z'
        },
        {
          teams: [
            'team A',
            'team E'
          ],
          winner: 1,
          accumulatedScore: '12-21',
          timestamp: '2019-05-24T20:17:45.162Z'
        },
        {
          teams: [
            'team C',
            'team D'
          ],
          winner: 0,
          accumulatedScore: '21-17',
          timestamp: '2019-05-24T12:17:45.162Z'
        },
        {
          teams: [
            'team B',
            'team C'
          ],
          winner: 1,
          accumulatedScore: '11-21',
          timestamp: '2019-05-23T22:17:45.162Z'
        },
        {
          teams: [
            'team A',
            'team D'
          ],
          winner: 0,
          accumulatedScore: '21-15',
          timestamp: '2019-01-24T22:17:45.162Z'
        },
        {
          teams: [
            'team A',
            'team E'
          ],
          winner: 0,
          accumulatedScore: '21-5',
          timestamp: '2019-03-24T22:17:45.162Z'
        },
        {
          teams: [
            'team A',
            'team E'
          ],
          winner: 1,
          accumulatedScore: '12-21',
          timestamp: '2019-01-24T20:17:45.162Z'
        },
        {
          teams: [
            'team C',
            'team D'
          ],
          winner: 0,
          accumulatedScore: '21-17',
          timestamp: '2018-05-24T12:17:45.162Z'
        },
        // {
        //   teams: [
        //     'team B',
        //     'team C'
        //   ],
        //   winner: 1,
        //   accumulatedScore: '11-21',
        //   timestamp: '2018-03-23T22:17:45.162Z'
        // },
        // {
        //   teams: [
        //     'team A',
        //     'team D'
        //   ],
        //   winner: 0,
        //   accumulatedScore: '21-15',
        //   timestamp: '2013-02-24T22:17:45.162Z'
        // }
      ]
    }
  },
  methods: {
    timestampToReadableString: function (timestamp) {
      TimeAgo.addLocale(en)
      const timeAgo = new TimeAgo('en-US')
      return timeAgo.format(new Date(timestamp))
    }
  }
}
</script>

<style>
span.trend {
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.1), inset 0 0 0 1px rgba(0,0,0,.1);
  display: inline-block;
  height: 24px;
  margin-right: 3px;
  width: 24px;
}
</style>
