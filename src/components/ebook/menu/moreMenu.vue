<template>
  <transition
    name="slide-up"
  >
    <div v-show="isShowMenu && menuMoreShowNumber === 2" class="menu-content">
      <DotProgressBar></DotProgressBar>
      <div class="box"></div>
      <FontFamilyBar></FontFamilyBar>
    </div>
  </transition>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import DotProgressBar from 'components/dotProgressBar/index.vue'
import FontFamilyBar from 'components/ebook/menu/fontFamilyBar.vue'

export default defineComponent({
  mixins: [ebookMixin],
  components: {
    DotProgressBar,
    FontFamilyBar
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
.box{
  height: 15rem;
}
</style>
