const state = {
  isLoading: false,
  displayName: ''
}

const mutations = {
  'SET_LOADING' (state, loading) {
    state.isLoading = loading
  },
  'SET_DISPLAYNAME' (state, name) {
    state.displayName = name
  },
  'CLEAR_USER' (state) {
    state.isLoading = false
    state.displayName = ''
  }
}

const actions = {
  setLoading ({commit}, loading) {
    commit('SET_LOADING', loading)
  },
  setDisplayName ({commit}, name) {
    commit('SET_DISPLAYNAME', name)
  },
  clear ({commit}) {
    commit('CLEAR_USER')
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