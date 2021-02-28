<template>
  <div id="read" class="read" ref="read"></div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import { setEbookLocalStorage, getEbookLocalStorage } from '@/utils/ebook/ebookLocalStorage'
import Epub from 'epubjs'
// global.epub = Epub

export default defineComponent({
  mixins: [ebookMixin],
  methods: {
    initEpub() {
      let startTimeStamp: number
      let startMoveX: number

      const book: any = Epub(this.fillName)
      const rendition: any = book.renderTo('read', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      })
      rendition.display().then(() => {
        console.log(getEbookLocalStorage(this.fillName, 'fontFamily'))
      })

      // 触摸开始
      rendition.on('touchstart', (event: TouchEvent) => {
        if (event.changedTouches.length > 1) return
        startTimeStamp = event.timeStamp
        startMoveX = (event.changedTouches as TouchList)[0].clientX
      })
      // 触摸结束
      rendition.on('touchend', (event: TouchEvent) => {
        if (event.changedTouches.length > 1) return
        const TimeStamp = event.timeStamp - startTimeStamp
        const MoveX = (event.changedTouches as TouchList)[0].clientX - startMoveX
        if (TimeStamp > 50 && MoveX < -40) {
          if (this.isShowMenu) this.setMenuShow()
          rendition.next()
        } else if (TimeStamp > 50 && MoveX > 40) {
          if (this.isShowMenu) this.setMenuShow()
          rendition.prev()
        } else {
          this.setMenuShow()
        }
      })

      // 把book相关对象保存到vuex里
      this.setEbook(book)
      this.setRendition(rendition)
    }
  },
  mounted() {
    const fillName = `/ebook/${this.$route.params.fillName}.epub`
    this.setFillName(fillName).then(() => {
      setEbookLocalStorage(fillName, 'fontSize', 10)
      setEbookLocalStorage(fillName, 'fontFamily', '凌云行书')
      this.initEpub()
    })
  }
})
</script>

<style lang="scss" scoped>
</style>
