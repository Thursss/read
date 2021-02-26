<template>
  <transition
    name="slide-up"
  >
    <div v-show="isShowMoreMenu" class="menu-content"></div>
  </transition>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  computed: {
    isShowMoreMenu() {
      const store: any = useStore()
      return store.state.ebook.isShowMoreMenu
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
  height: 180rem;
  z-index: 99;
  background-color: rgb(216, 216, 216);
  box-shadow: 1rem -4rem 8rem rgba(0, 0, 0, 0.2);
}
</style>
