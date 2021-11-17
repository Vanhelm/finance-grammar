import { createStore } from 'vuex'

export default createStore({
  state: {
    access: false,
    vplayer: false
  },
  mutations: {
    switch(state) {
      state.access = true
    },
    vplay(state) {
      state.vplayer = true
    }
  },
  actions: {
  },
  modules: {
  }
})
