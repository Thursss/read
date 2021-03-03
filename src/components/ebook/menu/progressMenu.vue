<template>
  <transition name="slide-up">
    <div
      class="menu-content"
      v-show="isShowMenu && menuMoreShowNumber === 1"
    >
      <ProgressBar
        :readingProgress='readingProgress'
        :progressAbled='progressAbled'
        @onProgreeInput='onProgreeInput'
        @onProgreeChange='onProgreeChange'
      ></ProgressBar>
    </div>
  </transition>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import { setEbookLocalStorage, getEbookLocalStorage } from '@/utils/ebook/ebookLocalStorage'
import ProgressBar from 'components/common/progressBar/index.vue'

export default defineComponent({
  mixins: [ebookMixin],
  components: {
    ProgressBar
  },
  methods: {
    onProgreeChange(value: number) {
      console.log(getEbookLocalStorage(`${this.fillName}-info`, 'readingProgress'))
    },
    onProgreeInput(value: number) {
      this.setReadingProgress(value)
      setEbookLocalStorage(`${this.fillName}-info`, 'readingProgress', value)
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
  background-color: rgb(216, 216, 216);
  box-shadow: 1rem -4rem 8rem rgba(0, 0, 0, 0.2);
  padding: 15rem 10rem;
}
</style>
