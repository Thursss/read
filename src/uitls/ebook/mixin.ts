import { mapState, mapActions } from 'vuex'
import { EBookStore } from '@/store/modules/ebook'

export const EbookMixin = {
  computed: {
    ...mapState('ebook', {
      fillName: state => (state as EBookStore).fillName,
      isShowMenu: state => (state as EBookStore).isShowMenu,
      menuMoreShowNumber: state => (state as EBookStore).menuMoreShowNumber,
    })
  },
  methods: {
    ...mapActions('ebook', [
      'setFillName',
      'setMenuShow',
      'setMenuMoreShow'
    ]),
  }
}
