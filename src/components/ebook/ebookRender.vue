<template>
  <div id="read" class="read" ref="read"></div>
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
      const book: any = Epub(`${process.env.VUE_APP_RES_URL}/ebook/${this.fillName}.epub`)
      const rendition: any = book.renderTo('read', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      })

      // 把book相关对象保存到vuex里
      this.setEbook(book)
      this.setRendition(rendition)
      // 添加字体文件
      this.addFontFamily()
      // 获取阅读进度
      const cfi = getEbookLocalStorage(this.fillName + '-info', 'readingProgress')
      // 渲染book
      this.display(cfi, () => {
        this.addTouchEvent()
        this.setFontSize()
        this.setFontFamily()
        this.setTheme()
      })

      // book初始化后进行分页
      book.ready.then(() => {
        //通过自带的钩子函数  回调返回locations对象
        let fontSizeIndex = getEbookLocalStorage(this.fillName + '-info', 'fontSizeListIndex')
        if (fontSizeIndex == null) fontSizeIndex = this.fontSizeListIndex
        return this.ebook.locations.generate(750 * (innerWidth / 375) * (FONT_SIZE_LIST[fontSizeIndex]['fontSize'] / 16))
      }).then(() => {
        this.setProgressAbled(false)
        this.refreshReadingProgress()
      })
    },
    setFontSize() {
      let fontSizeIndex = getEbookLocalStorage(this.fillName + '-info', 'fontSizeListIndex')
      if (fontSizeIndex == null) fontSizeIndex = this.fontSizeListIndex
      this.rendition.themes.fontSize(FONT_SIZE_LIST[fontSizeIndex]['fontSize'])
    },
    setFontFamily() {
      let fontFamilyIndex = getEbookLocalStorage(this.fillName + '-info', 'fontFamilyListIndex')
      if (fontFamilyIndex == null) fontFamilyIndex = this.fontFamilyListIndex
      this.rendition.themes.font(FONT_FAMILY_LIST[fontFamilyIndex]['fontFamily'])
    },
    setTheme() {
      let themeListIndex = getEbookLocalStorage(this.fillName + '-info', 'themeListIndex')
      if (themeListIndex == null) themeListIndex = this.themeListIndex
      // this.rendition.themes.font(FONT_FAMILY_LIST[themeListIndex]['fontFamily'])
    },
    addTouchEvent() {
      let startTimeStamp: number
      let startMoveX: number
      // 触摸开始
      this.rendition.on('touchstart', (event: TouchEvent) => {
        if (event.changedTouches.length > 1) return
        startTimeStamp = event.timeStamp
        startMoveX = (event.changedTouches as TouchList)[0].clientX
        // 阻止冒泡和默认事件
        event.stopPropagation()
        // event.preventDefault()
      })
      // 触摸结束
      this.rendition.on('touchend', (event: TouchEvent) => {
        if (event.changedTouches.length > 1) return
        const TimeStamp = event.timeStamp - startTimeStamp
        const MoveX = (event.changedTouches as TouchList)[0].clientX - startMoveX

        if (TimeStamp > 50 && MoveX < -40) {
          if (this.isShowMenu) this.setMenuShow()
          this.rendition.next().then(() => {
            this.refreshReadingProgress()
          })
        } else if (TimeStamp > 50 && MoveX > 40) {
          if (this.isShowMenu) this.setMenuShow()
          this.rendition.prev().then(() => {
            this.refreshReadingProgress()
          })
        } else {
          this.setMenuShow()
        }
        // 阻止冒泡和默认事件
        event.stopPropagation()
        // event.preventDefault()
      })
    },
    addFontFamily() {
      // 添加字体文件
      this.rendition.hooks.content.register(contents => {
        FONT_FAMILY_LIST.forEach(fontFamily => {
          if (fontFamily['url']) contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/${fontFamily['url']}`)
        })
      })
    }
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
