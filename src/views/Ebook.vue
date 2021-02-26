<template>
  <div class="book">
    <div class="read-wapper">
      <div id="read" class="read" ref="read"></div>
      <BookHead :isShowMenu="isShowMenu"></BookHead>
      <BookMask
        @leftEvent="prevPage"
        @centerEvent="toggleTitleAndMenu"
        @rightEvent="nextPage"
        :class="{ shadow: isShowMenu }"
      ></BookMask>
      <BookMenu
        @onProgressChangeEvent="changBookProgress"
        :isShowMenu="isShowMenu"
      ></BookMenu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
// import { EBookstore } from 'store/modules/ebook'
import Epub from 'epubjs'
import BookHead from 'components/ebook/ebookHead.vue'
import BookMask from 'components/ebook/ebookMask.vue'
import BookMenu from 'components/ebook/ebookMenu.vue'

export default defineComponent({
  setup() {
    const bookUrl1 = ref('/book/村上春树短篇小说集.epub')
    const store: any = useStore()
    const book: any = Epub(bookUrl1.value)
    const rendition = book.renderTo('read', {
      width: (window as any).innerwidth,
      height: window.innerHeight
    })
    let navigation: any
    let locations: any
    rendition.display()
    rendition.on('click', (event: Event) => {
      console.log(event)
    })
    //获取locations对象
    //直接调用不会生成 消耗太多资源
    book.ready
      .then(() => {
        //获取目录内容
        navigation = book.navigation
        //通过自带的钩子函数  回调返回locations对象
        return book.locations.generate()
      })
      .then(() => {
        locations = book.locations
      })
    return {
      store,
      book,
      rendition,
      navigation,
      locations
    }
  },
  data() {
    return {
      bookUrl1: '/book/村上春树短篇小说集.epub'
    }
  },
  computed: {
    isShowMenu() {
      const store: any = useStore()
      return store.state.ebook.isShowMenu
    }
  },
  components: {
    BookHead,
    BookMask,
    BookMenu
  },
  methods: {
    prevPage() {
      if (this.isShowMenu) {
        this.store.commit('ebook/setEbookMenuState', false)
      } else {
        this.rendition && this.rendition.prev()
      }
    },
    toggleTitleAndMenu() {
      this.store.commit('ebook/setEbookMenuState')
    },
    nextPage() {
      if (this.isShowMenu) {
        this.store.commit('ebook/setEbookMenuState', false)
      } else {
        this.rendition && this.rendition.next()
      }
    },
    changBookProgress() {
      console.log(this.locations)

      this.store.commit('ebook/toggleEbookMenuState', false)
      this.rendition && this.locations && this.rendition.display(this.locations.cfiFromPercentage(0.5))
    }
  },
  mounted() {
    console.log(this)
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
