<template>
  <div class="tab-bar-wapper">
    <div
      class="tab-item"
      v-for="(tab, index) in list"
      :key="index"
    >
      <div>
        {{tab?.text}}
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
interface RuleTabListProp {
  icon: string | null,
  text: string,
  flex: number
}
export type RuleTabListProps = RuleTabListProp[]
export default defineComponent({
  props: {
    list: Array as PropType<RuleTabListProps>
  },
  mounted() {
    console.log(this.list)
  }
})
</script>

<style lang="scss" scoped></style>
