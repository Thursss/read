<template>
  <div
    id="read"
    class="read"
    ref="read"
  ></div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import { getEbookLocalStorage } from '@/utils/ebook/ebookLocalStorage'
import { FONT_SIZE_LIST, FONT_FAMILY_LIST } from '@/utils/ebook/book'
import Epub from 'epubjs'
// global.epub = Epub

export default defineComponent({
  mixins: [ebookMixin],
  methods: {
    initEpub() {
      let startTimeStamp: number
      let startMoveX: number

      const book: any = Epub(`${process.env.VUE_APP_RES_URL}/ebook/${this.fillName}.epub`)
      const rendition: any = book.renderTo('read', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      })


      rendition.display().then(() => {
        this.setFontSize()
        this.setFontFamily()
        this.setTheme()
      })

      // 添加字体文件
      rendition.hooks.content.register(contents => {
        FONT_FAMILY_LIST.forEach(fontFamily => {
          if (fontFamily['url']) contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/${fontFamily['url']}`)
        })
      })

      // 触摸开始
      rendition.on('touchstart', (event: TouchEvent) => {
        if (event.changedTouches.length > 1) return
        startTimeStamp = event.timeStamp
        startMoveX = (event.changedTouches as TouchList)[0].clientX
        // 阻止冒泡和默认事件
        event.stopPropagation()
        event.preventDefault()
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
        // 阻止冒泡和默认事件
        event.stopPropagation()
        event.preventDefault()
      })

      // 把book相关对象保存到vuex里
      this.setEbook(book)
      this.setRendition(rendition)
    },
    setFontSize() {
      let fontListIndex = getEbookLocalStorage(this.fillName + '-info', 'fontListIndex')
      if (fontListIndex == null) fontListIndex = this.defaultFontSizeListIndex
      this.rendition.themes.fontSize(FONT_SIZE_LIST[fontListIndex]['fontSize'])
    },
    setFontFamily() {
      let fontFamilyIndex = getEbookLocalStorage(this.fillName + '-info', 'fontFamilyIndex')
      if (fontFamilyIndex == null) fontFamilyIndex = this.defaultFontFamilyListIndex
      this.rendition.themes.font(FONT_FAMILY_LIST[fontFamilyIndex]['fontFamily'])
    },
    setTheme() {
      let themeListIndex = getEbookLocalStorage(this.fillName + '-info', 'theme')
      if (themeListIndex == null) themeListIndex = this.defaultThemeListIndex
      // this.rendition.themes.font(FONT_FAMILY_LIST[themeListIndex]['fontFamily'])
    },
  },
  mounted() {
    this.setFillName(this.$route.params.fillName).then(() => {
      this.initEpub()
    })
  }
})
</script>

<style lang="scss" scoped>
</style>
