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
      defaultFontSizeListIndex: state => (state as EbookStore).defaultFontSizeListIndex,
      defaultFontFamilyListIndex: state => (state as EbookStore).defaultFontFamilyListIndex,
      defaultThemeListIndex: state => (state as EbookStore).defaultThemeListIndex,
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
