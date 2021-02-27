import { createStore } from 'vuex'

export interface EBookStore {
  fillName: string,
  isShowMenu: boolean,
  menuMoreShowNumber: number,
  readingProgress: number,
  ebook: any | null,
  rendition: any | null,
}

export default {
  namespaced: true,
  state (): EBookStore {
    return {
      fillName: '',
      isShowMenu: true,
      menuMoreShowNumber: -1,
      readingProgress: 10,
      ebook: null,
      rendition: null
    }
  },
  mutations: {
    SET_FILL_NAME(state: EBookStore, fillName?: string) {
      state.fillName = fillName || ''
    },
    SET_MENU_SHOW(state: EBookStore, menuShow?: boolean) {
      state.isShowMenu = !state.isShowMenu
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
    SET_EBOOK(state: EBookStore, ebook?: any | null) {
      state.ebook = ebook
    },
    SET_RENDITION(state: EBookStore, rendition?: any | null) {
      state.rendition = rendition
    },
    setReadingProgress(state: EBookStore, readingProgress: number) {
      state.readingProgress = readingProgress
    }
  },
  actions: {
    setFillName({ commit }, fillName?: string) {
      commit('SET_FILL_NAME', fillName)
    },
    setMenuShow({ commit }, menuShow?: boolean) {
      commit('SET_MENU_SHOW', menuShow)
    },
    setMenuMoreShow({ commit }, menuMoreShowNumber?: number) {
      commit('SET_MENU_MORE_SHOW', menuMoreShowNumber)
    },
    setEbook({ commit }, ebook?: any | null) {
      commit('SET_EBOOK', ebook)
    },
    setRendition({ commit }, rendition?: any | null) {
      commit('SET_RENDITION', rendition)
    },
  },
}
