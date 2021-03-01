import { createStore } from 'vuex'
import { EbookStore } from '@/utils/ebook/ebookType'

export default {
  namespaced: true,
  state (): EbookStore {
    return {
      fillName: '',
      isShowMenu: true,
      menuMoreShowNumber: -1, // -1 不显示， 0 显示目录，1 显示进度， 2 显示更多设置
      readingProgress: 10,
      ebook: null,
      rendition: null,
      defaultFontSizeListNumber: 2
    }
  },
  mutations: {
    SET_FILL_NAME(state: EbookStore, fillName?: string) {
      state.fillName = fillName || ''
    },
    SET_MENU_SHOW(state: EbookStore, menuShow?: boolean) {
      state.isShowMenu = !state.isShowMenu
      if(state.isShowMenu == false) state.menuMoreShowNumber = -1
    },
    SET_MENU_MORE_SHOW(state: EbookStore, menuMoreShowNumber?: number) {
      if (state.menuMoreShowNumber === menuMoreShowNumber) {
        state.menuMoreShowNumber = -1
      } else {
        state.menuMoreShowNumber = menuMoreShowNumber || -1
      }
    },
    SET_EBOOK(state: EbookStore, ebook?: any) {
      state.ebook = ebook
    },
    SET_RENDITION(state: EbookStore, rendition?: any) {
      state.rendition = rendition
    },
    setReadingProgress(state: EbookStore, readingProgress: number) {
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
    setEbook({ commit }, ebook?: any) {
      commit('SET_EBOOK', ebook)
    },
    setRendition({ commit }, rendition?: any) {
      commit('SET_RENDITION', rendition)
    },
  },
}
