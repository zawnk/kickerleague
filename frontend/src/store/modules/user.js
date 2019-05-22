const state = {
  isLoading: false
}

const mutations = {
  'SET_LOADING' (state, loading) {
    state.isLoading = loading
  },
  'CLEAR_USER' (state) {
    state.isLoading = false
  }
}

const actions = {
  setLoading ({commit}, loading) {
    commit('SET_LOADING', loading)
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