export default {
  namespaced: true,
  state: {
    isMobile: false
  },
  getters: {
    isMobile: state => {
      return state.isMobile
    }
  },
  mutations: {
    setDevice (state, payload) {
      state.isMobile = payload
    }
  }
}
