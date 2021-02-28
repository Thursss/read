import { mapState, mapActions } from 'vuex'
import { EbookStore } from '@/utils/ebook/ebookType'

export const ebookMixin = {
  computed: {
    ...mapState('ebook', {
      fillName: state => (state as EbookStore).fillName,
      isShowMenu: state => (state as EbookStore).isShowMenu,
      menuMoreShowNumber: state => (state as EbookStore).menuMoreShowNumber,
      ebook: state => (state as EbookStore).ebook,
      rendition: state => (state as EbookStore).rendition
    })
  },
  methods: {
    ...mapActions('ebook', [
      'setFillName',
      'setMenuShow',
      'setMenuMoreShow',
      'setEbook',
      'setRendition'
    ]),
  }
}
