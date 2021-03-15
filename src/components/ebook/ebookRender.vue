<template>
  <div id="read" class="read" ref="read"></div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import { getEbookLocalStorage } from '@/utils/ebook/ebookLocalStorage'
import { FONT_SIZE_LIST, FONT_FAMILY_LIST } from '@/utils/ebook/book'
import { flatten } from '@/utils/utils'
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
        this.initInfo()
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
    initInfo() {
      // 获取封面
      this?.ebook.loaded.cover.then(cover => {
        this?.ebook?.archive.createUrl(cover).then(url => {
          this.setCover(url)
        })
      })
      // 获取信息
      this?.ebook.loaded.metadata.then(metadata => {
        this.setMetadata(metadata)
      })
      // 获取目录
      this?.ebook.loaded.navigation.then(navigation => {
        const toc: any[] = [{
          id: 1,
          label: '水水水水',
          parent: undefined,
          subitems: [
            {
              id: 2,
              label: '啊沙发沙发',
              parent: 1,
              subitems: [
                {
                  id: 3,
                  label: '案说法是广东省个别地方',
                  parent: 2,
                  subitems: [
                    {
                      id: 4,
                      label: '4',
                      parent: 3,
                      subitems: [
                        {
                          id: 5,
                          label: '5',
                          parent: 4,
                          subitems: []
                        },
                      ]
                    },
                  ]
                },
              ]
            },
            {
              id: 6,
              label: '6水水水',
              parent: 1,
              subitems: []
            },
            {
              id: 7,
              label: '7',
              parent: 1,
              subitems: []
            }
          ]
        }, {
          id: 8,
          label: '改革的难度8',
          parent: undefined,
          subitems: []
        }]

        const flatToc: any[] = flatten(navigation?.toc, 'subitems')
        flatToc.forEach((item) => {
          item.parent ? item.leave = (flatToc.filter(parent => parent.id === item.parent) as any)[0]?.leave + 1 : item.leave = 0
        })
        this.setToc(flatToc)
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
      let startMoveY: number
      // 触摸开始
      this.rendition.on('touchstart', (event: TouchEvent) => {
        if (event.changedTouches.length > 1) return
        startTimeStamp = event.timeStamp
        startMoveX = (event.changedTouches as TouchList)[0].clientX
        startMoveY = (event.changedTouches as TouchList)[0].clientY
        // 阻止冒泡和默认事件
        event.stopPropagation()
        // event.preventDefault()
      })
      // 触摸结束
      this.rendition.on('touchend', (event: TouchEvent) => {
        if (event.changedTouches.length > 1) return
        const TimeStamp = event.timeStamp - startTimeStamp
        const MoveX = (event.changedTouches as TouchList)[0].clientX - startMoveX
        const MoveY = (event.changedTouches as TouchList)[0].clientY - startMoveY

        if (TimeStamp > 50) {
          if (MoveY >= 80) {
            console.log(MoveY)
            this.$refs['read'].style
            console.log(this.$refs['read'].style)
          } else if (MoveX < -40) {
            if (this.isShowMenu) this.setMenuShow()
            this.rendition.next().then(() => {
              this.refreshReadingProgress()
            })
          } else if (MoveX > 40) {
            if (this.isShowMenu) this.setMenuShow()
            this.rendition.prev().then(() => {
              this.refreshReadingProgress()
            })
          } else {
            this.setMenuShow()
          }
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
  watch: {
    moveY(moveY) {
      this.$refs['read'].style.transition = ''
      if (moveY < 0) {
        this.$refs['read'].style.transition = '.2s ease-in'
        moveY = 0
      }

      this.$refs['read'].style.transform = `translateY(${moveY}px)`
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
.read {
  background-color: #ccc;
}
</style>
