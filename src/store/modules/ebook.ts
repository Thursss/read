import { createStore } from 'vuex'

export interface EBookstore {
  isShowMenu: boolean,
  isShowMoreMenu: boolean,
  isShowProgressMenu: boolean,
  readingProgress: number
}

export default {
  namespaced: true,
  state (): EBookstore {
    return {
      isShowMenu: true,
      isShowMoreMenu: false,
      isShowProgressMenu: true,
      readingProgress: 10
    }
  },
  mutations: {
    setEbookMenuState (state: EBookstore, toggleState?: boolean) {
      state.isShowMenu = (toggleState || !state.isShowMenu)
    },
    setEbookMoreMenuState (state: EBookstore, toggleState?: boolean) {
      state.isShowMoreMenu = (toggleState || !state.isShowMoreMenu)
    },
    setEbookProgressMenuState (state: EBookstore, toggleState?: boolean) {
      state.isShowProgressMenu = (toggleState || !state.isShowProgressMenu)
    },
    setReadingProgress(state: EBookstore, readingProgress: number) {
      state.readingProgress = readingProgress
    }
  },
  actions: {},
}
