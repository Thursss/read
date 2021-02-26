<template>
  <transition
    name="slide-up"
  >
    <div v-show="isShowMoreMenu" class="menu-content">
      <ProgressBar></ProgressBar>
    </div>
  </transition>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useStore, mapState } from 'vuex'
import { EBookstore } from '@/store/modules/ebook'
import ProgressBar from 'components/progressBar/index.vue'

export default defineComponent({
  computed: {
    ...mapState('ebook', {
      isShowMoreMenu: store => (store as EBookstore).isShowMoreMenu
    })
  },
  components: {
    ProgressBar
  }
})
</script>

<style lang="scss" scoped>
.menu-content {
  position: absolute;
  left: 0;
  bottom: 48rem;
  right: 0;
  height: 180rem;
  z-index: 99;
  background-color: rgb(216, 216, 216);
  box-shadow: 1rem -4rem 8rem rgba(0, 0, 0, 0.2);
  padding: 15rem 10rem;
}
</style>
