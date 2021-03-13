<template>
  <transition name="slide-up">
    <div
      class="menu-content"
      v-show="isShowMenu && menuMoreShowNumber === 1"
    >
      <div v-if="!progressAbled">
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
          <p>{{(chapterName ? chapterName : '') + ' ' + readingProgress + '%'}}</p>
        </div>
      </div>
      <EbookLoading v-else></EbookLoading>
    </div>
  </transition>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import ProgressBar from 'components/common/progressBar/index.vue'
import EbookLoading from 'components/common/EbookLoading.vue'

export default defineComponent({
  mixins: [ebookMixin],
  components: {
    ProgressBar,
    EbookLoading
  },
  computed: {
    chapterName() {
      if (this.chapter) {
        const chapterInfo = this.ebook.section(this.chapter)
        if (chapterInfo && chapterInfo.href) {
          const navigationInfo = this.ebook.navigation.get(chapterInfo.href)
          if (navigationInfo && navigationInfo['label']) {
            return navigationInfo['label']
          }
        }
      }
      return null
    }
  },
  methods: {
    onProgreeChange(value) {
      const cfi = this.ebook.locations.cfiFromPercentage(value / 100)
      this.display(cfi)
    },
    onProgreeInput(value) {
      this.setReadingProgress(parseInt(value))
    },
    prevChapter() {
      if (this.chapter > 0 && !this.progressAbled) {
        this.setChapter(this.chapter - 1).then(() => {
          this.displayChapter()
        })
      }
    },
    nextChapter() {
      if (this.chapter < this.ebook.spine.length - 1 && !this.progressAbled) {
        this.setChapter(this.chapter + 1).then(() => {
          this.displayChapter()
        })
      }
    },
    displayChapter() {
      const chapterInfo = this.ebook.section(this.chapter)
      if (chapterInfo && chapterInfo.href) this.display(chapterInfo.href)
    }
  }
})
</script>

<style lang="scss" scoped>
.menu-content {
  position: absolute;
  left: 0;
  bottom: 48px;
  right: 0;
  z-index: 99;
  text-align: center;
  background-color: rgb(216, 216, 216);
  box-shadow: 1px -4px 8px rgba(0, 0, 0, 0.2);
  padding: 15px 10px;
  .readingTime {
    margin-bottom: 10px;
    font-size: 14px;
  }
  .title {
    margin-top: 10px;
    font-size: 16px;
  }
}
</style>
