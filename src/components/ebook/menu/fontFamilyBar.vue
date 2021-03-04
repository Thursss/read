<template>
  <div class="font-family-wapper">
    <div
      class="font-family-item"
      v-for="(fontFamily, index) in FONT_FAMILY_LIST"
      :key="index"
      :class="{on: index == i}"
      @click="setIndex(index)"
    >
      <span
        class="text"
        :style="{ 'font-family': fontFamily['fontFamily'] }"
      >{{fontFamily['fontFamily']}}</span>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import { setEbookLocalStorage, getEbookLocalStorage } from '@/utils/ebook/ebookLocalStorage'
import { FONT_FAMILY_LIST } from '@/utils/ebook/book'

export default defineComponent({
  mixins: [ebookMixin],
  data() {
    return {
      i: 1,
      FONT_FAMILY_LIST: FONT_FAMILY_LIST
    }
  },
  methods: {
    setIndex(index) {
      this.i = index
    }
  },
  watch: {
    i() {
      this.refreshFontFamily(this.i)
      this.rendition && this.rendition.themes.font(FONT_FAMILY_LIST[this.i]['fontFamily'])
    }
  },
  mounted() {
    let fontFamilyListIndex = getEbookLocalStorage(this.fillName + '-info', 'fontFamilyListIndex')
    if (fontFamilyListIndex == null) fontFamilyListIndex = this.fontFamilyListIndex
    this.i = fontFamilyListIndex
  }
})
</script>

<style lang="scss" scoped>
.font-family-wapper {
  display: flex;
  width: 100%;
  height: 27rem;
  padding: 0 10rem;
  overflow-x: auto;
  box-sizing: border-box;
  .font-family-item {
    flex-shrink: 0;
    margin-right: 10rem;
    height: 15rem;
    line-height: 15rem;
    border: 1px solid rgba(34, 34, 34, 0.2);
    padding: 5rem 10rem;
    border-radius: 2rem;
    border-color: #666;
    color: #666;
    &.on {
      border-color: #000;
      color: #000;
    }
  }
}
</style>
