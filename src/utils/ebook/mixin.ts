import { mapState, mapActions } from 'vuex'
import { EbookStore } from '@/utils/ebook/ebookType'
import { setEbookLocalStorage } from '@/utils/ebook/ebookLocalStorage'

export const ebookMixin = {
  computed: {
    ...mapState('ebook', {
      fillName: state => (state as EbookStore).fillName,
      isShowMenu: state => (state as EbookStore).isShowMenu,
      menuMoreShowNumber: state => (state as EbookStore).menuMoreShowNumber,
      ebook: state => (state as EbookStore).ebook,
      rendition: state => (state as EbookStore).rendition,
      fontSizeListIndex: state => (state as EbookStore).fontSizeListIndex,
      fontFamilyListIndex: state => (state as EbookStore).fontFamilyListIndex,
      themeListIndex: state => (state as EbookStore).themeListIndex,
      readingProgress: state => (state as EbookStore).readingProgress,
      readingTime: state => (state as EbookStore).readingTime,
      progressAbled: state => (state as EbookStore).progressAbled,
      chapter: state => (state as EbookStore).chapter,
    })
  },
  methods: {
    ...mapActions('ebook', [
      'setFillName',
      'setMenuShow',
      'setMenuMoreShow',
      'setEbook',
      'setRendition',
      'setFontSizeListIndex',
      'setFontFamilyListIndex',
      'setThemeListIndex',
      'setReadingProgress',
      'setReadingTime',
      'setProgressAbled',
      'setChapter'
    ]),

    refreshReadingProgress() {
      const currentLocation = this.rendition.currentLocation()
      const cfi = currentLocation['start']['cfi']
      const index = currentLocation['start']['index']
      const progress = this.ebook.locations.percentageFromCfi(cfi)
      this.setReadingProgress(Math.floor(progress * 100))
      this.setChapter(index)
      setEbookLocalStorage(this.fillName + '-info', 'readingProgress', cfi)
    },
    refreshReadingTime(readTime: number) {
      this.setReadingTime(readTime)
      setEbookLocalStorage(this.fillName + '-info', 'readingTime', readTime)
    },
    refreshFontSize(fontSizeListIndex: number) {
      this.setFontSizeListIndex(fontSizeListIndex)
      setEbookLocalStorage(this.fillName + '-info', 'fontSizeListIndex', fontSizeListIndex)
    },
    refreshFontFamily(fontFamilyListIndex: number) {
      this.setFontFamilyListIndex(fontFamilyListIndex)
      setEbookLocalStorage(this.fillName + '-info', 'fontFamilyListIndex', fontFamilyListIndex)
    },
    refreshTheme(themeListIndex: number) {
      this.setThemeListIndex(themeListIndex)
      setEbookLocalStorage(this.fillName + '-info', 'themeListIndex', themeListIndex)
    },
    display(cfi, cb?: Function) {
      if (cfi) {
        this.rendition.display(cfi).then(() => {
          this.refreshReadingProgress()
          if (cb) cb()
        })
      } else {
        this.rendition.display().then(() => {
          this.refreshReadingProgress()
          if (cb) cb()
        })
      }
    }
  }
}
