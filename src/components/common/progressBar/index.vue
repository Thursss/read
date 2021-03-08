<template>
  <div class="progress-bar-wapper">
    <div class="progress-conten">
      <p class="but prev" @click="prevChapter">上一章</p>
      <input
        id="snrPollInterval"
        type="range"
        min="1"
        max="100"
        step="1"
        :value="readingProgress"
        :style="{ 'background-size': `${readingProgress}% 100%` }"
        :disabled="progressAbled"
        @input="onInput"
        @change="onChange"
      />
      <p class="but next" @click="nextChapter">下一章</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, InputHTMLAttributes } from 'vue'
import { throttle } from '@/utils/utils'

export default defineComponent({
  props: {
    readingProgress: {
      type: Number,
      default: 0
    },
    progressAbled: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onInput: throttle(function (...arg) {
      this.$emit('onProgreeInput', (arg[0].target as InputHTMLAttributes).value)
    }, 200),
    onChange(event: Event) {
      this.$emit('onProgreeChange', (event.target as InputHTMLAttributes).value)
    },
    prevChapter () {
      this.$emit('onPrevChapter')
    },
    nextChapter () {
      this.$emit('onNextChapter')
    },
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
