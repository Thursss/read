<template>
  <div
    class="directory-wapper"
    v-show="isShowMenu && menuMoreShowNumber === 0"
  >
    <div class="content">
      <div class="content-wapper">
        <component :is="currentTabComponent"></component>
      </div>
      <div class="set-tab-wapper">
        <div
          class="tab"
          :class="{on: on === 0}"
          @click="tabChang(0)"
        >目录</div>
        <div
          class="tab"
          :class="{on: on === 1}"
          @click="tabChang(1)"
        >书签</div>
      </div>
    </div>
    <div
      class="content-bg"
      @click="hiedMenu"
    ></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import TabMenu from 'components/ebook/menu/tabMenu.vue'
import BookMarks from 'components/ebook/menu/bookMarks.vue'

export default defineComponent({
  mixins: [ebookMixin],
  components: {
    TabMenu,
    BookMarks
  },
  computed: {
    currentTabComponent() {
      switch (this.on) {
        case 0:
          return 'TabMenu'
        case 1:
          return 'BookMarks'
        default:
          return 'TabMenu'
      }
    }
  },
  data() {
    return {
      on: 0
    }
  },
  methods: {
    tabChang(index) {
      this.on = index
    }
  }
})
</script>

<style lang="scss" scoped>
.directory-wapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 300;
  display: flex;

  .content {
    position: relative;
    flex: 0 0 85%;
    height: 100%;
    width: 85%;
    background-color: #ccc;
    .content-wapper {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 50rem;
    }
    .set-tab-wapper {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      height: 50rem;
      line-height: 50rem;
      text-align: center;
      color: #666;
      border-top: 1px solid #aaa;

      .tab {
        flex: 1;
        &.on {
          color: #346cb9;
        }
      }
    }
  }
  .content-bg {
    height: 100%;
    width: 85%;
    background-color: rgba(8, 8, 8, 0.445);
  }
}
</style>
