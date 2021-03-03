<template>
  <transition
    name="slide-up"
  >
    <div v-show="isShowMenu && menuMoreShowNumber === 2" class="menu-content">
      <FontSizeBar></FontSizeBar>
      <div class="box"></div>
      <FontFamilyBar></FontFamilyBar>
      <div class="box"></div>
      <ThemeBar></ThemeBar>
    </div>
  </transition>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import FontSizeBar from 'components/ebook/menu/fontSizeBar.vue'
import FontFamilyBar from 'components/ebook/menu/fontFamilyBar.vue'
import ThemeBar from 'components/ebook/menu/themeBar.vue'

export default defineComponent({
  mixins: [ebookMixin],
  components: {
    FontSizeBar,
    FontFamilyBar,
    ThemeBar
  }
})
</script>

<style lang="scss" scoped>
.menu-content {
  position: absolute;
  left: 0;
  bottom: 48rem;
  right: 0;
  z-index: 99;
  background-color: rgb(216, 216, 216);
  box-shadow: 1rem -4rem 8rem rgba(0, 0, 0, 0.2);
  padding: 15rem 10rem;
}
.box{
  height: 15rem;
}
</style>
