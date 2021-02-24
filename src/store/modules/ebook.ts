import { createStore } from 'vuex'

export interface EBookstore {
  isShowMenu: boolean
}

export default {
  namespaced: true,
  state () {
    return {
      isShowMenu: false
    }
  },
  mutations: {
    toggleEbookMenuState (state: EBookstore, toggleState?: boolean) {
      state.isShowMenu = (toggleState || !state.isShowMenu)
    }
  },
  actions: {},
}
