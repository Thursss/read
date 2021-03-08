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
      fontSizeListIndex: 2,
      fontFamilyListIndex: 0,
      themeListIndex: 0,
      progressAbled: true,
      chapter: 0,
      toc: null,
      cover: '',
      metadata: {}
    }
  },
  mutations: {
    SET_FILL_NAME(state: EbookStore, fillName?: string) {
      state.fillName = fillName ?? ''
    },
    SET_MENU_SHOW(state: EbookStore, menuShow?: boolean) {
      state.isShowMenu = !state.isShowMenu
      if(state.isShowMenu == false) state.menuMoreShowNumber = -1
    },
    SET_MENU_MORE_SHOW(state: EbookStore, menuMoreShowNumber: number) {
      if (state.menuMoreShowNumber === menuMoreShowNumber) {
        state.menuMoreShowNumber = -1
      } else {
        state.menuMoreShowNumber = menuMoreShowNumber
      }
    },
    SET_EBOOK(state: EbookStore, ebook?: any) {
      state.ebook = ebook
    },
    SET_RENDITION(state: EbookStore, rendition?: any) {
      state.rendition = rendition
    },
    SET_FONT_SIZE_LIST_INDEX(state: EbookStore, fontSizeListIndex?: any) {
      state.fontSizeListIndex = fontSizeListIndex
    },
    SET_FONT_FAMILY_LIST_INDEX(state: EbookStore, fontFamilyListIndex?: any) {
      state.fontFamilyListIndex = fontFamilyListIndex
    },
    SET_THEME_LIST_INDEX(state: EbookStore, themeListIndex?: any) {
      state.themeListIndex = themeListIndex
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
    },
    SET_TOC(state: EbookStore, toc: any) {
      state.toc = toc
    },
    SET_COVER(state: EbookStore, cover: string) {
      state.cover = cover
    },
    SET_METADATA(state: EbookStore, metadata: object) {
      state.metadata = metadata
    },
  },
  actions: {
    setFillName({ commit }, fillName?: string) {
      commit('SET_FILL_NAME', fillName)
    },
    setMenuShow({ commit }, menuShow?: boolean) {
      commit('SET_MENU_SHOW', menuShow)
    },
    setMenuMoreShow({ commit }, menuMoreShowNumber: number) {
      commit('SET_MENU_MORE_SHOW', menuMoreShowNumber)
    },
    setEbook({ commit }, ebook?: any) {
      commit('SET_EBOOK', ebook)
    },
    setRendition({ commit }, rendition?: any) {
      commit('SET_RENDITION', rendition)
    },
    setFontSizeListIndex({ commit }, fontSizeListIndex?: any) {
      commit('SET_FONT_SIZE_LIST_INDEX', fontSizeListIndex)
    },
    setFontFamilyListIndex({ commit }, fontFamilyListIndex?: any) {
      commit('SET_FONT_FAMILY_LIST_INDEX', fontFamilyListIndex)
    },
    setThemeListIndex({ commit }, rendition?: any) {
      commit('SET_THEME_LIST_INDEX', rendition)
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
    setToc({ commit }, toc?: any) {
      commit('SET_TOC', toc)
    },
    setCover({ commit }, cover: string) {
      commit('SET_COVER', cover)
    },
    setMetadata({ commit }, metadata: object) {
      commit('SET_METADATA', metadata)
    },
  },
}
