<template>
  <div class="font-family-wapper">
    <div
      v-for="(fontFamily, i) in FONT_FAMILY_LIST"
      :key="i"
      class="font-family-item"
    >
      <span
        class="text"
        :style="{ 'font-family': fontFamily['fontFamily'] }"
      >{{fontFamily['fontFamily']}}</span>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { FONT_FAMILY_LIST } from '@/utils/ebook/book'

export default defineComponent({
  data() {
    return {
      FONT_FAMILY_LIST: FONT_FAMILY_LIST
    }
  }
})
</script>

<style lang="scss" scoped>
.font-family-wapper {
  display: flex;
  width: 100%;
  height: 27rem;
  padding: 0 10rem;
  overflow-x: auto;
  box-sizing: border-box;
  .font-family-item {
    flex-shrink: 0;
    margin-right: 10rem;
    height: 15rem;
    line-height: 15rem;
    border: 1px solid rgba(34, 34, 34, 0.2);
    padding: 5rem 10rem;
    border-radius: 2rem;
  }
}
</style>
