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
          <li
            class="menu-item"
            @click="onProgressChange"
          ><span class="icon-progress"></span></li>
          <li
            class="menu-item"
            @click='toggleShowMoreMeun'
          ><span class="icon-more"></span></li>
        </ul>
      </div>
      <MuenMore :isShowMoreMenu='isShowMoreMenu'></MuenMore>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from 'vue'
import MuenMore from 'components/ebook/menu/moreMenu.vue'

export default defineComponent({
  props: {
    isShowMenu: Boolean
  },
  components: {
    MuenMore
  },
  data () {
    return {
      isShowMoreMenu: true
    }
  },
  methods: {
    onProgressChange () {
      this.$emit('onProgressChangeEvent')
    },
    toggleShowMoreMeun () {
      this.isShowMoreMenu = !this.isShowMoreMenu
    }
  }
})
</script>

<style lang="scss" scoped>
.ebook-menu {
  .menu-wapper {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background-color: #ccc;
    box-shadow: 1rem -4rem 8rem rgba(0, 0, 0, 0.2);
    z-index: 101;
    height: 48rem;
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
}
</style>
