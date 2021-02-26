<template>
  <div class="progress-bar-wapper">
    <div class="progress-conten">
      <p class="but prev">上一章</p>
      <input
        id="snrPollInterval"
        type="range"
        min="1"
        max="100"
        step="1"
        :value="readingProgress"
        :style="{ 'background-size': `${readingProgress}% 100%` }"
        @input="onInput"
      />
      <p class="but next">下一章</p>
    </div>
    <div class="title">
      <p>xxxxxxxxx</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    readingProgress: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onInput (event: MouseEvent) {
      this.$emit('onProgreeChange', event)
    }
  }
})
</script>

<style lang="scss" scoped>
.progress-bar-wapper {
  position: relative;
  .progress-conten {
    display: flex;
    align-items: center;
    .but {
      font-size: 12rem;
    }
    #snrPollInterval {
      position: relative;
      flex: 1;
      margin: 0 8rem;
      width: 100%;
      height: 5rem;
      border-radius: 6rem;
      -webkit-appearance: none;
      background: -webkit-linear-gradient(#5d6268, #5d6268) no-repeat, #b4b5b7;
      background-size: 30% 100%;
      &::-webkit-slider-thumb {
        width: 10rem;
        height: 10rem;
        background-color: #fff;
        border-radius: 50%;
        cursor: default;
        -webkit-appearance: none;
      }
    }
  }
  .title {
    margin-top: 5rem;
    text-align: center;
    font-size: 14rem;
  }
}
</style>
