import { createStore } from 'vuex'

export interface EBookStore {
  fillName: string,
  isShowMenu: boolean,
  menuMoreShowNumber: number,
  readingProgress: number
}

export default {
  namespaced: true,
  state (): EBookStore {
    return {
      fillName: '',
      isShowMenu: true,
      menuMoreShowNumber: -1,
      readingProgress: 10
    }
  },
  mutations: {
    SET_FILLNAME(state: EBookStore, fillName?: string) {
      state.fillName = fillName || ''
    },
    SET_MENU_SHOW(state: EBookStore, menuShow?: boolean) {
      state.isShowMenu = menuShow || !state.isShowMenu
      if(state.isShowMenu == false) state.menuMoreShowNumber = -1
    },
    SET_MENU_MORE_SHOW(state: EBookStore, menuMoreShowNumber?: number) {
      // -1 不显示， 0 显示目录，1 显示进度， 2 显示更多设置
      if (state.menuMoreShowNumber === menuMoreShowNumber) {
        state.menuMoreShowNumber = -1
      } else {
        state.menuMoreShowNumber = menuMoreShowNumber || -1
      }
    },
    setReadingProgress(state: EBookStore, readingProgress: number) {
      state.readingProgress = readingProgress
    }
  },
  actions: {
    setFillName({ commit }, fillName?: string) {
      commit('SET_FILLNAME', fillName || '')
    },
    setMenuShow({ commit }, menuShow?: string) {
      commit('SET_MENU_SHOW', menuShow || '')
    },
    setMenuMoreShow({ commit }, menuMoreShowNumber?: number) {
      commit('SET_MENU_MORE_SHOW', menuMoreShowNumber)
    },
  },
}
