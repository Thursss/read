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
      <div class="menu-wapper" :style="{'box-shadow': menuMoreShowNumber == -1 ? '1rem -4rem 8rem rgba(0, 0, 0, 0.2)' : 'none'}">
        <ul class="menu-list">
          <li
            class="menu-item"
          >
            <span class="icon-menu"></span>
            <p class="text">目录</p>
          </li>
          <li
            class="menu-item"
            @click="showMoreMeun(1)"
          ><span class="icon-progress"></span>
            <p class="text">进度</p>
          </li>
          <li
            class="menu-item"
            @click='showMoreMeun(2)'
          ><span class="icon-more"></span>
            <p class="text">设置</p>
          </li>
        </ul>
      </div>
      <MoreMuen></MoreMuen>
      <ProgressMenu></ProgressMenu>
    </div>
  </transition>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import MoreMuen from 'components/ebook/menu/moreMenu.vue'
import ProgressMenu from 'components/ebook/menu/progressMenu.vue'

export default defineComponent({
  mixins: [ebookMixin],
  components: {
    MoreMuen,
    ProgressMenu
  },
  methods: {
    showMoreMeun (menuMoreShowNumber?: number) {
      this.setMenuMoreShow(menuMoreShowNumber)
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
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-size: 14rem;
        .text {
          font-size: 8rem;
          margin-top: 5rem;
        }
      }
    }
  }
}
</style>
