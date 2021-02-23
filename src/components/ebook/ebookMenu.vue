<template>
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
      <div class="menu-wapper">
        <ul class="menu-list">
          <li class="menu-item"><span class="icon-menu"></span></li>
          <li class="menu-item"><span class="icon-progress"></span></li>
          <li class="menu-item"><span class="icon-more"></span></li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    isShowMenu: Boolean
  }
})
</script>

<style lang="scss" scoped>
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
</style>
