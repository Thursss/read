<template>
  <div class="font">凌云行书</div>
  <TabBar :list='tabList'></TabBar>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import TabBar from 'components/common/tabBar/index.vue'

const tabList: any[] = [
  {
    icon: 'string',
    text: 'string',
    flex: 1
  }
]

export default defineComponent({
  data() {
    return {
      tabList: tabList
    }
  },
  components: {
    TabBar
  }
})
</script>

<style lang='scss' scoped>
.font {
  font-family: '凌云行书';
  font-size: 30px;
}
</style>
