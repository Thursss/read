<template>
  <div class="mask">
    <div
      @click.stop='clickLeftEvent'
      class="view left"
    ></div>
    <div
      @click.stop='clickCenterEvent'
      class="view center"
    ></div>
    <div
      @click.stop='clickRightEvent'
      class="view right"
    ></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    clickLeftEvent () {
      this.$emit('leftEvent')
    },
    clickCenterEvent () {
      this.$emit('centerEvent')
    },
    clickRightEvent () {
      this.$emit('rightEvent')
    }
  }
})
</script>

<style lang="scss" scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  width: 100%;
  height: 100%;
  .view {
    // position: absolute;
    opacity: 0;
  }
  .left {
    // left: 0;
    width: 30%;
    background-color: black;
  }
  .right {
    // right: 0;
    width: 30%;
    background-color: black;
  }
  .center {
    flex: 1;
    // left: 120rem;
    // right: 120rem;
  }
}
</style>
