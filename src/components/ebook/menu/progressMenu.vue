<template>
  <transition name="slide-up">
    <div
      class="menu-content"
      v-show="isShowMenu && menuMoreShowNumber === 1"
    >
      <div class="readingTime">
        <p>已经阅读 {{ Math.ceil(readingTime / 60) }} 分钟</p>
      </div>
      <ProgressBar
        :readingProgress='readingProgress'
        :progressAbled='progressAbled'
        @onProgreeInput='onProgreeInput'
        @onProgreeChange='onProgreeChange'
        @onPrevChapter='prevChapter'
        @onNextChapter='nextChapter'
      ></ProgressBar>
      <div class="title">
        <p>{{ (chapterName || '') + ' ' + readingProgress.toFixed(2) + '%'}}</p>
      </div>
    </div>
  </transition>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import { setEbookLocalStorage } from '@/utils/ebook/ebookLocalStorage'
import ProgressBar from 'components/common/progressBar/index.vue'

export default defineComponent({
  mixins: [ebookMixin],
  components: {
    ProgressBar
  },
  // computed: {
  //   chapterName() {
  //     if (this.chapter) {
  //       const chapterInfo = this.ebook.section(this.chapter)
  //       if (chapterInfo && chapterInfo.href) {
  //         return this.ebook.navigation.get(chapterInfo.href)['label']
  //       }
  //     }
  //     return null
  //   }
  // },
  methods: {
    onProgreeChange(value) {
      const cfi = this.ebook.locations.cfiFromPercentage(value / 100)
      this.rendition.display(cfi)
    },
    onProgreeInput(value) {
      value = parseInt(value)
      this.setReadingProgress(value)
      setEbookLocalStorage(`${this.fillName}-info`, 'readingProgress', value)

    },
    prevChapter() {
      if (this.chapter > 0 && !this.progressAbled) {
        this.setChapter(this.chapter - 1).then(() => {
          this.displayChapter(this.chapter)
        })
      }
    },
    nextChapter() {
      if (this.chapter < this.ebook.spine.length - 1 && !this.progressAbled) {
        this.setChapter(this.chapter + 1).then(() => {
          this.displayChapter(this.chapter)
        })
      }
    },
    displayChapter(chapter) {
      const chapterInfo = this.ebook.section(chapter)
      if (chapterInfo && chapterInfo.href) this.rendition.display(chapterInfo.href).then(() => {
        const currentLocation = this.rendition.currentLocation()
        const progress = this.ebook.locations.percentageFromCfi(currentLocation['start']['cfi'])
        this.setReadingProgress(progress * 100)
        setEbookLocalStorage(`${this.fillName}-info`, 'readingProgress', progress * 100)
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.menu-content {
  position: absolute;
  left: 0;
  bottom: 48rem;
  right: 0;
  z-index: 99;
  text-align: center;
  background-color: rgb(216, 216, 216);
  box-shadow: 1rem -4rem 8rem rgba(0, 0, 0, 0.2);
  padding: 15rem 10rem;
  .readingTime{
    margin-bottom: 10rem;
  }
  .title {
    margin-top: 10rem;
  }
}
</style>
