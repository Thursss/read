<template>
  <div
    id="read"
    class="read"
    ref="read"
  ></div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { EbookMixin } from '@/uitls/ebook/mixin'
import Epub from 'epubjs'
// global.epub = Epub

export default defineComponent({
  mixins: [EbookMixin],
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
      rendition.display()
      // 触摸开始
      rendition.on('touchstart', (event: TouchEvent) => {
        if (event.changedTouches.length > 1) return
        startTimeStamp = event.timeStamp
        startMoveX = (event.changedTouches as  TouchList)[0].clientX
      })
      // 触摸结束
      rendition.on('touchend', (event: TouchEvent) => {
        if (event.changedTouches.length > 1) return
        const TimeStamp = event.timeStamp - startTimeStamp
        const MoveX = (event.changedTouches as  TouchList)[0].clientX - startMoveX
        if (TimeStamp > 50 && MoveX < -40) {
          rendition.next()
        } else if (TimeStamp > 50 && MoveX > 40) {
          rendition.prev()
        } else {
          this.setMenuShow()
        }
      })

    //   this.book = book
    //   this.rendition = rendition
    },
    toggleTitleAndMenu() {
     this.setMenuShow()
    }
  },
  mounted() {
    this.setFillName(`/ebook/${this.$route.params.fillName}.epub`).then(() => {
      this.initEpub()
    })
  }
})
</script>

<style lang="scss" scoped>
</style>
