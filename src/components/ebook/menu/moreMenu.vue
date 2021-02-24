<template>
  <transition
    name="slide-up"
  >
    <div v-show="isShowMoreMenu" class="menu-content"></div>
  </transition>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    isShowMoreMenu: {
      type: Boolean,
      default: true
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
  height: 100rem;
  z-index: 99;
  background-color: rgb(216, 216, 216);
  box-shadow: 1rem -4rem 8rem rgba(0, 0, 0, 0.2);
}
</style>
