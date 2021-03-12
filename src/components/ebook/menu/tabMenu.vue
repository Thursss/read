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
          :src="cover"
          alt=""
        ></div>
      <div class="book-desc">
        <p class="book-name">{{metadata?.title}}</p>
        <p class="book-author">{{metadata?.creator}}</p>
      </div>
      <div class="read-info">
        <p class="read-progress">{{readingProgress}}%已读</p>
        <p class="read-time">已读{{Math.ceil(readingTime / 60)}}分钟</p>
      </div>
    </div>
    <div
      class="toc-wapper"
      v-if="!inputFocus"
    >
      <div
        class="toc-item"
        v-for="(item, index) in toc"
        :key="index + '-toc'"
        :style="{'padding-left': item.leave * 15 + 'px'}"
        :class="{on: chapter === (index + 2)}"
        @click="displayNav(item.href)"
      >
        <div class="text">
          {{item.label}}
        </div>
        <div class="index">
          {{index + 1}}
        </div>
      </div>
    </div>
    <div
      class="seach-wapper"
      v-else
    ></div>
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
    },
    displayNav(cfi) {
      this.display(cfi)
      this.hiedMenu()
    }
  },
  mounted() {
    console.log(this.toc)
  }
})
</script>

<style lang="scss" scoped>
.tab-wapper {
  position: relative;
  padding-bottom: 10px;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  .search-wapper {
    display: flex;
    align-items: center;
    padding: 0 10px;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    .search-box {
      display: flex;
      align-items: center;
      padding: 0 5px;
      width: 80%;
      height: 35px;
      margin-right: 4px;
      border: 1px solid #999;
      border-radius: 1px;
      background-color: #ccc;
      .icon {
        margin-right: 4px;
        font-size: 18px;
        color: #666;
      }
      .input {
        flex: 1;
        border: none;
        font-size: 14px;
        background-color: transparent;
        height: 100%;
        &:focus {
          outline: none;
        }
      }
    }
    .cancel-but {
      margin: 0 5px;
      color: #346cb9;
    }
  }
  .info-box {
    display: flex;
    align-items: center;
    padding: 0 10px 15px 10px;
    height: 76px;
    border-bottom: 1px solid #bbb;
    box-sizing: border-box;
    .book-img {
      padding-right: 10px;
      height: 100%;
      img {
        width: 45px;
        height: 60px;
      }
    }
    .book-desc {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      .book-name {
        max-height: 40px;
        line-height: 20px;
        font-size: 16px;
        color: #222;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .book-author {
        max-height: 20px;
        font-size: 14px;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .read-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      .read-progress,
      .read-time {
        line-height: 18px;
        font-size: 14px;
        color: #222;
      }
    }
  }
  .toc-wapper {
    position: absolute;
    top: 136px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden auto;
    padding: 0 10px;
    box-sizing: border-box;
    .toc-item {
      display: flex;
      line-height: 40px;
      font-size: 16px;
      &.on {
        color: rgb(242, 255, 65);
      }
      .text {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
