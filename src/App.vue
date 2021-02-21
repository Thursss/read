<template>
  <div id="nav"></div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    setRem() {
      const html: HTMLHtmlElement | null = document.querySelector('html')
      let fontSize = window.innerWidth / 10
      fontSize = fontSize > 50 ? 50 : fontSize
      html && (html.style.fontSize = fontSize + 'px')
    },
    onError(error: Event) {
      console.error(error)
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
