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
      <div
        class="menu-wapper"
        :style="{'box-shadow': menuMoreShowNumber == -1 ? '1px -4px 8px rgba(0, 0, 0, 0.2)' : 'none'}"
      >
        <ul class="menu-list">
          <li
            class="menu-item"
            @click="showMoreMeun(0)"
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
      <DirectoryMenu></DirectoryMenu>
    </div>
  </transition>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import MoreMuen from 'components/ebook/menu/moreMenu.vue'
import ProgressMenu from 'components/ebook/menu/progressMenu.vue'
import DirectoryMenu from 'components/ebook/directoryMenu.vue'

export default defineComponent({
  mixins: [ebookMixin],
  components: {
    MoreMuen,
    ProgressMenu,
    DirectoryMenu
  },
  methods: {
    showMoreMeun(menuMoreShowNumber?: number) {
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
    box-shadow: 1px -4px 8px rgba(0, 0, 0, 0.2);
    z-index: 101;
    padding: 10px 0;
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
        font-size: 14px;
        .text {
          font-size: 8px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
