<template>
  <teleport to='#event-mask'>
    <div
      class="mask-wapper"
      @touchstart='touchstart'
      @touchend='touchend'
      @touchmove='touchmove'
    >
      <div
        class="ele left"
        @click="click('left')"
      ></div>
      <div
        class="ele center"
        @click="click('center')"
      ></div>
      <div
        class="ele right"
        @click="click('right')"
      ></div>
    </div>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ebookMixin } from '@/utils/ebook/mixin'
import { getEquipmentType }from '@/utils/utils'

interface MaskType {
  startTimeStamp: number,
  startMoveX: number,
  startMoveY: number
}

export default defineComponent({
  mixins: [ebookMixin],
  data(): MaskType {
    return {
      startTimeStamp: 0,
      startMoveX: 0,
      startMoveY: 0
    }
  },
  methods: {
    touchstart(event: TouchEvent) {
      if (event.changedTouches.length > 1) return
      this.startTimeStamp = event.timeStamp
      this.startMoveX = (event.changedTouches as TouchList)[0].clientX
      this.startMoveY = (event.changedTouches as TouchList)[0].clientY
    },
    touchmove(event: TouchEvent) {
      let MoveY = (event.changedTouches as TouchList)[0].clientY - this.startMoveY
      if (MoveY < 0) MoveY = 0
      this.setMoveY(MoveY)
    },
    touchend(event: TouchEvent) {
      this.setMoveY(-1)
      if (event.changedTouches.length > 1) return
      const TimeStamp = event.timeStamp - this.startTimeStamp
      const MoveX = (event.changedTouches as TouchList)[0].clientX - this.startMoveX
      const MoveY = (event.changedTouches as TouchList)[0].clientY - this.startMoveY
      if (TimeStamp > 50) {
        if (MoveY >= 80) {
          this.hiedMenu()
        } else if (MoveX < -40) {
          if (this.isShowMenu) this.setMenuShow()
          this.rendition.next().then(() => {
            this.refreshReadingProgress()
          })
        } else if (MoveX > 40) {
          if (this.isShowMenu) this.setMenuShow()
          this.rendition.prev().then(() => {
            this.refreshReadingProgress()
          })
        } else {
          this.setMenuShow()
        }
      }
    },
    click(position: string) {
      if(getEquipmentType() === 'phone') return
      switch (position) {
        case 'left':
          if (this.isShowMenu) this.setMenuShow()
          this.rendition.next().then(() => {
            this.refreshReadingProgress()
          })
          break
        case 'right':
          if (this.isShowMenu) this.setMenuShow()
          this.rendition.prev().then(() => {
            this.refreshReadingProgress()
          })
          break
        case 'center':
          this.setMenuShow()
          break
        default:
          break
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.mask-wapper {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  .left,
  .right {
    width: 30%;
    height: 100%;
  }
  .center {
    height: 100%;
    flex: 1;
  }
}
</style>
