import { createStore } from 'vuex'
import { EbookStore } from '@/utils/ebook/ebookType'

export default {
  namespaced: true,
  state (): EbookStore {
    return {
      fillName: '',
      isShowMenu: false,
      menuMoreShowNumber: -1, // -1 不显示， 0 显示目录，1 显示进度， 2 显示更多设置
      readingProgress: 0,
      readingTime: 0,
      ebook: null,
      rendition: null,
      defaultFontSizeListIndex: 2,
      defaultFontFamilyListIndex: 0,
      defaultThemeListIndex: 0,
      progressAbled: true,
      chapter: 0
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
    SET_READING_PROGRESS(state: EbookStore, readingProgress: number) {
      state.readingProgress = readingProgress
    },
    SET_READING_TIME(state: EbookStore, readingTime: number) {
      state.readingTime = readingTime
    },
    SET_PROGRESS_ABLED(state: EbookStore, progressAbled: boolean) {
      state.progressAbled = progressAbled
    },
    SET_CHAPTER(state: EbookStore, chapter: number) {
      state.chapter = chapter
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
    setReadingProgress({ commit }, readingProgress: number) {
      commit('SET_READING_PROGRESS', readingProgress)
    },
    setReadingTime({ commit }, readingTime: number) {
      commit('SET_READING_TIME', readingTime)
    },
    setProgressAbled({ commit }, progressAbled?: number) {
      commit('SET_PROGRESS_ABLED', progressAbled)
    },
    setChapter({ commit }, chapter?: number) {
      commit('SET_CHAPTER', chapter)
    },
  },
}
