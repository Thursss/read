<template>
  <div class="book">
    <div class="read-wapper">
      <div
        id="read"
        class="read"
        ref="read"
      ></div>
      <transition
        name="slide-down"
        mode="out-in"
        appear
      >
        <div
          v-show="isShowMenu"
          @click.stop
          class="ebook-head"
        >
          <div class="left">
            <span class="icon-back"></span>
          </div>
          <ul class="right">
            <li class="menu-item"><span class="icon-menu"></span></li>
            <li class="menu-item"><span class="icon-progress"></span></li>
            <li class="menu-item"><span class="icon-more"></span></li>
          </ul>
        </div>
      </transition>
      <BookMask
        @leftEvent="prevPage"
        @centerEvent="toggleTitleAndMenu"
        @rightEvent="nextPage"
      ></BookMask>
      <transition
        name="slide-up"
        mode="out-in"
        appear
      >
        <div
          v-show="isShowMenu"
          @click.stop
          class="ebook-menu"
        >
          <ul class="menu-list">
            <li class="menu-item"><span class="icon-menu"></span></li>
            <li class="menu-item"><span class="icon-progress"></span></li>
            <li class="menu-item"><span class="icon-more"></span></li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Epub from 'epubjs'
import BookMask from 'components/bookMask.vue'

export default defineComponent({
  data () {
    return {
      bookUrl1: '/book/村上春树短篇小说集.epub',
      isShowMenu: true
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
  .ebook-head {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
    display: flex;
    height: 48rem;
    background-color: #ccc;
    box-shadow: 0 -0.8rem 0.2rem rgba(0, 0, 0, 0.2);
    .left,
    .right {
      display: flex;
      align-items: center;
      font-size: 18rem;
    }
    .left {
      width: 40rem;
      justify-content: center;
      font-size: 16rem;
    }
    .right {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      .menu-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40rem;
        height: 100%;
      }
    }
  }
  .ebook-menu {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    height: 48rem;
    background-color: #ccc;
    box-shadow: 0 -0.8rem 0.2rem rgba(0, 0, 0, 0.2);
    .menu-list {
      display: flex;
      height: 100%;
      .menu-item {
        display: flex;
        flex: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-size: 18rem;
      }
    }
  }
}
</style>
