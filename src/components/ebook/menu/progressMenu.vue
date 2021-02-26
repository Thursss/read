<template>
  <transition name="slide-up">
    <div
      v-show="isShowProgressMenu"
      class="menu-content"
    >
      <ProgressBar
        :readingProgress='readingProgress'
        @onProgreeChange='onProgreeChange'
      ></ProgressBar>
    </div>
  </transition>
</template>

<script lang='ts'>
import { defineComponent, InputHTMLAttributes } from 'vue'
import { useStore, mapState } from 'vuex'
import { EBookstore } from '@/store/modules/ebook'
import ProgressBar from 'components/progressBar/index.vue'

export default defineComponent({
  setup() {
    const store: any = useStore()
    return {
      store
    }
  },
  computed: {
    ...mapState('ebook', {
      isShowProgressMenu: store => (store as EBookstore).isShowProgressMenu,
      readingProgress: store => (store as EBookstore).readingProgress
    })
  },
  components: {
    ProgressBar
  },
  methods: {
    onProgreeChange (event: MouseEvent) {
      const readingProgress = (event.target as InputHTMLAttributes).value as string
      this.store.commit('ebook/setReadingProgress', parseInt(readingProgress))
    }
  }
})
</script>

<style lang="scss" scoped>
.menu-content {
  position: absolute;
  left: 0;
  bottom: 48rem;
  right: 0;
  // height: 80rem;
  z-index: 99;
  background-color: rgb(216, 216, 216);
  box-shadow: 1rem -4rem 8rem rgba(0, 0, 0, 0.2);
  padding: 15rem 10rem;
}
</style>
