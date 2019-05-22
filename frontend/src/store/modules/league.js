const state = {
  id: '',
  name: '',
  settings: {},
  status: null
}

const mutations = {
  'CLEAR_LEAGUE' (state) {
    state.id = ''
    state.name = ''
    state.settings = {}
    state.status = null
  }
}

const actions = {
  clear ({commit}) {
    commit('CLEAR_LEAGUE')
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