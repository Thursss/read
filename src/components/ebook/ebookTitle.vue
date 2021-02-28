<template>
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
</template>

<script>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'

export default defineComponent({
  mixins: [ebookMixin]
})
</script>

<style lang="scss" scoped>
.ebook-head {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
  display: flex;
  height: 48rem;
  background-color: #ccc;
  box-shadow: 1rem 4rem 8rem rgba(0, 0, 0, 0.2);
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
</style>
