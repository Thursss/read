<template>
  <div class="loading-wapper">
    <slot>
      <div class="loading">
        loading
        <div class="linght"></div>
      </div>
    </slot>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>

<style lang="scss" scoped>
@import 'assets/style/minix.scss';
.loading-wapper {
  @include center;
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 18px;
  .loading {
    position: relative;
    .linght {
      position: absolute;
      top: -10%;
      left: 0;
      width: 15px;
      height: 110%;
      filter: blur(2px);
      background-color: #ccc;
      animation: left-to-right 4s infinite linear;
    }
  }
}
</style>
