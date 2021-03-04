<template>
  <div class="book">
    <div class="read-wapper">
      <BookTitle></BookTitle>
      <BookRender></BookRender>
      <BookMenu></BookMenu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getEbookLocalStorage, setEbookLocalStorage } from '@/utils/ebook/ebookLocalStorage'
import { ebookMixin } from '@/utils/ebook/mixin'
import BookRender from 'components/ebook/ebookRender.vue'
import BookTitle from 'components/ebook/ebookTitle.vue'
import BookMenu from 'components/ebook/ebookMenu.vue'

export default defineComponent({
  mixins: [ebookMixin],
  components: {
    BookTitle,
    BookMenu,
    BookRender
  },
  methods: {
    tickTime() {
      let readTime = getEbookLocalStorage(this.fillName + '-info', 'readingTime')
      if (!readTime) readTime = 0
      this.tick = setInterval(() => {
        readTime += 1
        this.refreshReadingTime(readTime)
      }, 1000)
    }
  },
  mounted() {
    this.tickTime()
  },
  beforeUnmount() {
    if (this.tick) clearInterval(this.tick)
  }
})
</script>

<style lang="scss" scoped>
.book {
  position: relative;
}
.read-wapper {
  position: relative;
  background-color: #ccc;
}
.shadow {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
