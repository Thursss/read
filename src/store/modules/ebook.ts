import { createStore } from 'vuex'

export interface EBookstore {
  isShowMenu: boolean,
  isShowMoreMenu: boolean
}

export default {
  namespaced: true,
  state (): EBookstore {
    return {
      isShowMenu: true,
      isShowMoreMenu: false
    }
  },
  mutations: {
    setEbookMenuState (state: EBookstore, toggleState?: boolean) {
      state.isShowMenu = (toggleState || !state.isShowMenu)
    },
    setEbookMoreMenuState (state: EBookstore, toggleState?: boolean) {
      state.isShowMoreMenu = (toggleState || !state.isShowMoreMenu)
    },
  },
  actions: {},
}
