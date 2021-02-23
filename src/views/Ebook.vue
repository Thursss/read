<template>
  <div class="book">
    <div class="read-wapper">
      <div
        id="read"
        class="read"
        ref="read"
      ></div>
      <BookHead :isShowMenu='isShowMenu'></BookHead>
      <BookMask
        @leftEvent="prevPage"
        @centerEvent="toggleTitleAndMenu"
        @rightEvent="nextPage"
      ></BookMask>
      <BookMenu :isShowMenu='isShowMenu'></BookMenu>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Epub from 'epubjs'
import BookHead from 'components/ebook/ebookHead.vue'
import BookMask from 'components/ebook/ebookMask.vue'
import BookMenu from 'components/ebook/ebookMenu.vue'

export default defineComponent({
  data () {
    return {
      bookUrl1: '/book/村上春树短篇小说集.epub',
      isShowMenu: true
    }
  },
  components: {
    BookHead,
    BookMask,
    BookMenu
  },
  methods: {
    showEpub () {
      this.book = new Epub(this.bookUrl1)
      this.rendition = this.book.renderTo('read', {
        width: window.innerwidth,
        height: window.innerwidth
      })
      this.rendition.display()
    },
    prevPage () {
      if (this.isShowMenu) this.isShowMenu = false
      this.rendition && this.rendition.prev()
    },
    toggleTitleAndMenu () {
      this.isShowMenu = !this.isShowMenu
    },
    nextPage () {
      if (this.isShowMenu) this.isShowMenu = false
      this.rendition && this.rendition.next()
    }
  },
  mounted () {
    this.showEpub()
  }
})
</script>

<style lang="scss" scoped>
.book {
  position: relative;
}
.read-wapper {
  position: relative;
}
</style>
