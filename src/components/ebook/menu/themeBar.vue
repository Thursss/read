<template>
  <div class="theme-wapper">
    <div
      class="theme-item"
      v-for="(theme, index) in THEME_LIST"
      :key="index"
      :class="{on: index == i}"
      @click="setIndex(index)"
    >
      <span
        class="ui"
        :style="{'background-color': theme['body']['background-color'], 'border-color': '#222'}"
      ></span>
      <span class="text">{{theme['alias']}}</span>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import { setEbookLocalStorage, getEbookLocalStorage } from '@/utils/ebook/ebookLocalStorage'
import { THEME_LIST } from '@/utils/ebook/book'

export default defineComponent({
  mixins: [ebookMixin],
  data() {
    return {
      i: 1,
      THEME_LIST: THEME_LIST
    }
  },
  methods: {
    setIndex(index) {
      this.i = index
    }
  },
  watch: {
    i() {
      setEbookLocalStorage(this.fillName + '-info', 'theme', this.i)
      // this.rendition && this.rendition.themes.fontSize(THEME_LIST[this.i]['fontFamily'])
    }
  },
  mounted() {
    let themeListIndex = getEbookLocalStorage(this.fillName + '-info', 'theme')
    if (themeListIndex == null) themeListIndex = this.defaultThemeListIndex
    this.i = themeListIndex
  }
})
</script>

<style lang="scss" scoped>
.theme-wapper {
  display: flex;
  width: 100%;
  height: 43rem;
  padding: 0 10rem;
  overflow: auto hidden;
  box-sizing: border-box;
  .theme-item {
    text-align: center;
    flex-shrink: 0;
    margin-right: 10rem;
    line-height: 15rem;
    padding: 0 5rem;
    border-radius: 2rem;
    border-color: #666;
    color: #666;
    &.on {
      border-color: #000;
      color: #000;
    }
    .ui {
      display: block;
      border-radius: 50%;
      width: 20rem;
      height: 20rem;
      margin-bottom: 5rem;
      border: 1px solid #111;
      border-color: #222;
    }
  }
}
</style>
