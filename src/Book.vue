<template>
<div class="book">
  <die class="read-wapper">
    <div id="read"></div>
  </die>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import Epub from 'epubjs'
const DOWNLOAD_URL = 'static/三体.epub'

export default defineComponent({
  methods: {
    showBook() {
      const book = new Epub(DOWNLOAD_URL)
      const rendition = book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight,
        method: 'default'
      })
      rendition.display()
    }
  },
  mounted() {
    this.showBook()
  }
})
</script>

<style lang="scss" scope></style>
