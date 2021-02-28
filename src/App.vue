<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    setRem() {
      const html: HTMLHtmlElement | null = document.querySelector('html')
      let fontSize = window.innerWidth / 375
      fontSize = fontSize > 5 ? 5 : fontSize
      html && (html.style.fontSize = fontSize + 'px')
    },
    onError(error: ErrorEvent) {
      // console.log(error)
      // console.error(`https://www.baidu.com/s?ie=UTF-8&wd='${error.message}'`)
    }
  },
  mounted() {
    window.addEventListener('DOMContentLoaded', this.setRem)
    window.addEventListener('error', this.onError)
  },
  unmounted() {
    window.removeEventListener('DOMContentLoaded', this.setRem)
    window.removeEventListener('error', this.onError)
  }
})
</script>

<style lang="scss"></style>
