<template>
  <div class="tab-wapper">
    <div class="search-wapper">
      <div class="search-box">
        <span class="icon icon-cart"></span>
        <input
          class="input"
          type="text"
          placeholder="搜索"
          @click="tiggtFocus(true)"
        >
      </div>
      <div
        class="cancel-but"
        v-show="inputFocus"
        @click="tiggtFocus(false)"
      >取消</div>
    </div>
    <div class="info-box">
      <div class="book-img"><img
          src="https://book.youbaobao.xyz/epub2/2018_Book_MethodologicalInvestigationsIn/OEBPS/images/978-3-319-72408-9_CoverFigure.jpg"
          alt=""
        ></div>
      <div class="book-desc">
        <p class="book-name">xxxx</p>
        <p class="book-author">xxxx</p>
      </div>
      <div class="read-info">
        <p class="read-progress">{{readingProgress}}%已读</p>
        <p class="read-time">已读{{Math.ceil(readingTime / 60)}}分钟</p>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'

export default defineComponent({
  mixins: [ebookMixin],
  data() {
    return {
      inputFocus: false
    }
  },
  methods: {
    tiggtFocus(type: boolean) {
      this.inputFocus = type
    }
  }
})
</script>

<style lang="scss" scoped>
.tab-wapper {
  padding-bottom: 10rem;
  border-bottom: 1px solid #bbb;
  .search-wapper {
    display: flex;
    align-items: center;
    padding: 0 10rem;
    width: 100%;
    height: 60rem;
    box-sizing: border-box;
    .search-box {
      display: flex;
      align-items: center;
      padding: 0 5rem;
      width: 80%;
      height: 35rem;
      margin-right: 4rem;
      border: 1px solid #999;
      border-radius: 1rem;
      background-color: #ccc;
      .icon {
        margin-right: 4rem;
        font-size: 18rem;
        color: #666;
      }
      .input {
        flex: 1;
        border: none;
        font-size: 14rem;
        background-color: transparent;
        height: 100%;
        &:focus {
          outline: none;
        }
      }
    }
    .cancel-but {
      margin: 0 5rem;
      color: #346cb9;
    }
  }
  .info-box {
    display: flex;
    align-items: center;
    padding: 0 10rem;
    height: 60rem;
    .book-img {
      padding-right: 10rem;
      height: 100%;
      img {
        width: 45rem;
        height: 60rem;
      }
    }
    .book-desc {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      .book-name {
        line-height: 20rem;
        font-size: 16rem;
        color: #222;
      }
      .book-author {
        font-size: 14rem;
        color: #666;
      }
    }
    .read-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      .read-progress,.read-time {
        line-height: 18rem;
        font-size: 14rem;
        color: #222;
      }
    }
  }
}
</style>
