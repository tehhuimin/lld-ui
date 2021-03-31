const module = {
  namespaced: true,
  state() {
    return {
      userName: 'kazabana'
    }
  },
  getters: {},
  mutations: {
    getUserInfo(state, payload) {
      state.userName = payload.userName
    },
  },
  actions: {
    getUserInfo({ commit }, payload) {
      commit('getUserInfo', payload)
    },
  },
}
export default module