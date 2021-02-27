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
import BookRender from 'components/ebook/ebookRender.vue'
import BookTitle from 'components/ebook/ebookTitle.vue'
import BookMenu from 'components/ebook/ebookMenu.vue'

export default defineComponent({
  components: {
    BookTitle,
    BookMenu,
    BookRender
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
