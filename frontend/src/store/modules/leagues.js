const state = {
  playerLeagues: [],
  runningLeagues: [],
}

const mutations = {
  'CLEAR_LEAGUES' (state) {
    state.playerLeagues = [],
    state.runningLeagues = []
  }
}

const actions = {
  clear ({commit}) {
    commit('CLEAR_LEAGUES')
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