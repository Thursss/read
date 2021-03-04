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
    refreshReadingTime(readTime: number) {
      this.setReadingTime(readTime)
      setEbookLocalStorage(this.fillName + '-info', 'readingTime', readTime)
    }
  }
}
