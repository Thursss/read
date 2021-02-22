<template>
  <div class="book">
    <die class="read-wapper">
      <div
        id="read"
        class="read"
        ref="read"
      ></div>
      <BookMask
        @leftEvent='prevPage'
        @centerEvent='toggleTitleAndMenu'
        @rightEvent='nextPage'
      ></BookMask>
    </die>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Epub from 'epubjs'
import BookMask from 'components/bookMask.vue'

export default defineComponent({
  data () {
    return {
      bookUrl1: '/book/村上春树短篇小说集.epub'
    }
  },
  components: {
    BookMask
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
      this.rendition && this.rendition.prev()
    },
    toggleTitleAndMenu () {
      console.log('toggleTitleAndMenu')
    },
    nextPage () {
      this.rendition && this.rendition.next()
    }
  },
  mounted () {
    this.showEpub()
  }
})
</script>

<style lang="scss" scoped>
.book{
  position: relative;
}
</style>
