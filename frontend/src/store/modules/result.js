const state = {
  bestOf: null,
  scoreToWin: null,
  teamsLeftToPlay: []
}

const mutations = {
  'CLEAR_RESULT' (state) {
    state.bestOf = null,
    state.scoreToWin = null,
    state.teamsLeftToPlay = []
  }
}

const actions = {
  clear ({commit}) {
    commit('CLEAR_RESULT')
  }
}

const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}