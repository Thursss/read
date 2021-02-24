<template>
  <div class="book">
    <div class="read-wapper">
      <div
        id="read"
        class="read"
        ref="read"
      ></div>
      <BookHead :isShowMenu='isShowMenu'></BookHead>
      <BookMask
        @leftEvent="prevPage"
        @centerEvent="toggleTitleAndMenu"
        @rightEvent="nextPage"
        :class="{shadow: isShowMenu}"
      ></BookMask>
      <BookMenu
        @onProgressChangeEvent='changBookProgress'
        :isShowMenu='isShowMenu'
      ></BookMenu>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Epub from 'epubjs'
import BookHead from 'components/ebook/ebookHead.vue'
import BookMask from 'components/ebook/ebookMask.vue'
import BookMenu from 'components/ebook/ebookMenu.vue'

export default defineComponent({
  data () {
    return {
      bookUrl1: '/book/村上春树短篇小说集.epub',
      isShowMenu: true
    }
  },
  components: {
    BookHead,
    BookMask,
    BookMenu
  },
  methods: {
    showEpub () {
      this.book = new Epub(this.bookUrl1)
      this.rendition = this.book.renderTo('read', {
        width: window.innerwidth,
        height: window.innerwidth
      })
      this.rendition.display()
      //获取locations对象
      //直接调用不会生成 消耗太多资源
      this.book.ready.then(() => {
        //获取目录内容
        this.navigation = this.book.navigation
        //通过自带的钩子函数  回调返回locations对象
        return this.book.locations.generate()
      }).then(result => {
        this.locations = this.book.locations
      })
    },
    prevPage () {
      if (this.isShowMenu) {
        this.isShowMenu = false
      } else {
        this.rendition && this.rendition.prev()
      }
    },
    toggleTitleAndMenu () {
      this.isShowMenu = !this.isShowMenu
    },
    nextPage () {
      if (this.isShowMenu) {
        this.isShowMenu = false
      } else {
        this.rendition && this.rendition.next()
      }
    },
    changBookProgress () {
      this.rendition.display(this.locations.cfiFromPercentage(0.5))
      this.isShowMenu = false
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
  background-color: #ccc;
}
.shadow {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
