<template>
  <transition name="slide-up">
    <div
      class="menu-content"
      v-show="isShowMenu && menuMoreShowNumber === 1"
    >
      <ProgressBar></ProgressBar>
    </div>
  </transition>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import ProgressBar from 'components/progressBar/index.vue'

export default defineComponent({
  mixins: [ebookMixin],
  components: {
    ProgressBar
  },
  methods: {
    onProgreeChange(event: MouseEvent) {
      console.log(event)
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
