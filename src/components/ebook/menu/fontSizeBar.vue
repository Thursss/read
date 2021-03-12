<template>
  <div class="font-size-wapper">
    <div
      class="icon-wapper less"
      @click="less"
    >
      <span class="icon icon-cart"></span>
    </div>
    <div class="bar-wapper">
      <div
        class="line"
        v-for="(value, index) in FONT_SIZE_LIST"
        :key="index"
        @click="dotClick(index)"
      >
        <span
          class="line-dot"
          v-show="i != index"
        ></span>
        <div
          class="border-dot"
          v-show="i == index"
        >
          <div class="dot"></div>
        </div>
      </div>
    </div>
    <div
      class="icon-wapper add"
      @click="add"
    >
      <span class="icon icon-cart"></span>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import { setEbookLocalStorage, getEbookLocalStorage } from '@/utils/ebook/ebookLocalStorage'
import { FONT_SIZE_LIST } from '@/utils/ebook/book'

export default defineComponent({
  mixins: [ebookMixin],
  data() {
    return {
      i: 2,
      FONT_SIZE_LIST: FONT_SIZE_LIST
    }
  },
  methods: {
    dotClick(index) {
      this.i = index
    },
    less() {
      if (this.i > 0) this.i--
    },
    add() {
      if (this.i < this.FONT_SIZE_LIST.length - 1) this.i++
    }
  },
  watch: {
    i() {
      this.refreshFontSize(this.i)
      this.rendition && this.rendition.themes.fontSize(FONT_SIZE_LIST[this.i]['fontSize'])
    }
  },
  mounted() {
    let fontSizeIndex = getEbookLocalStorage(this.fillName + '-info', 'fontSizeListIndex')
    if (fontSizeIndex == null) fontSizeIndex = this.fontSizeListIndex
    this.i = fontSizeIndex
  }
})
</script>

<style lang="scss" scoped>
.font-size-wapper {
  display: flex;
  align-items: center;
  .bar-wapper {
    display: flex;
    flex: 1;
    .line {
      position: relative;
      flex: 1;
      height: 1px;
      background-color: #999;
      .line-dot {
        position: absolute;
        top: -2px;
        left: 50%;
        transform: translateX(-0.5px);
        width: 1px;
        height: 5px;
        background-color: #666;
      }
      .border-dot {
        position: absolute;
        top: -7px;
        left: 50%;
        transform: translateX(-7px);
        width: 14px;
        height: 14px;
        border-radius: 50%;
        box-sizing: border-box;
        border: #111 solid 1px;
        .dot {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #111;
        }
      }
    }
  }
  .icon-wapper {
    padding: 0 10px;
    &.less {
      font-size: 14px;
    }
    &.add {
      font-size: 18px;
    }
  }
}
</style>
