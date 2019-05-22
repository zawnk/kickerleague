const state = {
  token: '',
  isUserLoggedIn: false
}

const mutations = {
  'SET_TOKEN' (state, token) {
    state.token = token
    if (token) {
      state.isUserLoggedIn = true
    } else {
      state.isUserLoggedIn = false
    }
  }
}

const actions = {
  setToken ({commit}, token) {
    commit('SET_TOKEN', token)
  },
  clear ({commit}) {
    commit('SET_TOKEN', '')
  }
}

const getters = {
  token (state) {
    return state.token
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}