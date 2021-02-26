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
          <li
            class="menu-item"
          >
            <span class="icon-menu"></span>
            <p class="text">目录</p>
          </li>
          <li
            class="menu-item"
            @click="toggleShowProgressMeun"
          ><span class="icon-progress"></span>
            <p class="text">进度</p>
          </li>
          <li
            class="menu-item"
            @click='toggleShowMoreMeun'
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
import { useStore } from 'vuex'
import MoreMuen from 'components/ebook/menu/moreMenu.vue'
import ProgressMenu from 'components/ebook/menu/progressMenu.vue'

export default defineComponent({
  setup () {
    const store: any = useStore()
    return {
      store
    }
  },
  props: {
    isShowMenu: Boolean
  },
  components: {
    MoreMuen,
    ProgressMenu
  },
  methods: {
    onProgressChange () {
      this.$emit('onProgressChangeEvent')
    },
    toggleShowMoreMeun () {
      this.store.commit('ebook/setEbookMoreMenuState')
    },
    toggleShowProgressMeun () {
      this.store.commit('ebook/setEbookProgressMenuState')
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
