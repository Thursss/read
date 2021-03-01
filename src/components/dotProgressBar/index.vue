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
        v-for="(value, index) in length"
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
      length: FONT_SIZE_LIST.length
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
      if (this.i < this.length - 1) this.i++
    }
  },
  watch: {
    i() {
      setEbookLocalStorage(this.fillName + '-info', 'fontListNumber', this.i)
      this.rendition && this.rendition.themes.fontSize(FONT_SIZE_LIST[this.i]['fontSize'])
    }
  },
  mounted() {
    let fontListNumber = getEbookLocalStorage(this.fillName + '-info', 'fontListNumber')
    if (fontListNumber == null) fontListNumber = this.defaultFontSizeListNumber
    this.i = fontListNumber
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
      height: 1rem;
      background-color: #999;
      .line-dot {
        position: absolute;
        top: -2rem;
        left: 50%;
        transform: translateX(-0.5rem);
        width: 1rem;
        height: 5rem;
        background-color: #666;
      }
      .border-dot {
        position: absolute;
        top: -7rem;
        left: 50%;
        transform: translateX(-7rem);
        width: 14rem;
        height: 14rem;
        border-radius: 50%;
        box-sizing: border-box;
        border: #111 solid 1rem;
        .dot {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          background-color: #111;
        }
      }
    }
  }
  .icon-wapper {
    padding: 0 10rem;
    &.less {
      font-size: 14rem;
    }
    &.add {
      font-size: 18rem;
    }
  }
}
</style>
