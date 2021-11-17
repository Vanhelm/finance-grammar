import { createStore } from 'vuex'

export default createStore({
  state: {
    access: false,
  },
  mutations: {
    switch(state) {
      state.access = true
    },
  },
  actions: {
  },
  modules: {
  }
})
