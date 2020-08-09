<template>
  <div class="four-buttons"
       :class="{on: isGameOn, playing: isPlaying}">
    <div
      class="button"
      :class="{active: item.active}"
      v-for="(item, index) in buttons"
      :key="index"
      :style="{background: item.color}"
      @click="checking(index + 1)"
    ></div>
  </div>
</template>

<script>
  export default {
    name: 'FourButtons',
    data: () => ({
      isPlaying: false,
      testArray: []
    }),
    props: {
      isGameOn: {
        type: Boolean,
        default: false
      },
      playlist: {
        type: Array,
        default: []
      },
      level: {
        type: Number,
        default: 0
      },
      sound: {
        type: Boolean,
        default: false
      },
      speed: {
        type: Array,
        default: []
      },
      buttons: {
        type: Array,
        default: []
      },
      sounds: {
        type: Array,
        default: []
      }
    },
    methods: {
      playing(){
        this.isPlaying = true
        if(this.isGameOn) {
          let speed = this.level < this.speed.length + 1 ? this.speed[this.level - 1] : 400
          const arr = this.getExtendedArray()
          this.testArray = arr; let z = 0
          const interval = setInterval(() => {
            this.animateItem(arr[z]); z++
            if(z >= arr.length) {
              clearInterval(interval)
              this.isPlaying = false
            }
          }, speed)
        }
      },
      getExtendedArray(){
        const zxc = []
        this.playlist.forEach(x => {
          if(x.val === 1) zxc.push(x.pos)
          else for(let q = 0; q < x.val; q++) zxc.push(x.pos)
        })
        return zxc
      },
      animateItem(pos){
        this.buttons[pos - 1].active = true
        if(this.sound) this.sounds[pos - 1].play()
        setTimeout(() => {this.buttons[pos - 1].active = false}, 150)
      },
      checking(i){
        if(this.isGameOn && !this.isPlaying){
          if(this.sound) this.sounds[i - 1].play()
          if(i === this.testArray[0]) {
            this.testArray.splice(0, 1)
            if(this.testArray.length === 0) this.$emit('newRound')
          } else this.$emit('gameOver')
        }
      }
    },
    watch: {
      playlist: {
        handler: function(val, old){
          if(old) this.playing()
        },
        deep: true,
        immediate: true
      }
    }
  }
</script>

<style lang="sass" scoped>
  .four-buttons
    display: grid
    grid-template-columns: repeat(2, min-content)
    grid-template-rows: repeat(2, min-content)
    grid-gap: 0
    width: min-content
    margin: 0 auto 40px
    .button
      width: 120px
      height: 120px
      &:first-child
        border-radius: 50px 0 0 0
      &:nth-child(2)
        border-radius: 0 50px 0 0
      &:nth-child(3)
        border-radius: 0 0 0 50px
      &:last-child
        border-radius: 0 0 50px 0
      &.active
        background: $grey !important
    &.on:not(.playing)
      .button
        &:hover
          cursor: pointer
        &:active
          background: $grey !important
    &.playing
      .button
        cursor: not-allowed
</style>