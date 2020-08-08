<template>
  <div class="four-buttons">
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
      buttons: [
        {color: 'orange', active: false},
        {color: 'pink', active: false},
        {color: 'indianred', active: false},
        {color: 'gold', active: false}
      ],
      speed: [1500, 1000, 400],
      isChecking: false,
      testArray: [],
      sound: false,
      sounds: [
        new Audio(require('./../sounds/1.mp3')),
        new Audio(require('./../sounds/2.mp3')),
        new Audio(require('./../sounds/3.mp3')),
        new Audio(require('./../sounds/4.mp3'))
      ]
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
      }
    },
    methods: {
      playing(){
        if(this.isGameOn) {
          let speed = this.level < this.speed.length + 1 ? this.speed[this.level - 1] : 400
          const arr = this.getNewArray()
          this.testArray = arr
          let z = 0
          const interval = setInterval(() => {
            this.animateItem(arr[z])
            z++
            if(z >= arr.length) clearInterval(interval)
          }, speed)
        }
      },
      getNewArray(){
        const zxc =[]
        this.playlist.forEach(x => {
          if(x.val === 1) zxc.push(x.pos)
          else {
            let q = 0
            while(q < x.val){
              zxc.push(x.pos)
              q++
            }
          }
        })
        return zxc
      },
      animateItem(pos){
        this.buttons[pos - 1].active = true
        if(this.sound) this.sounds[pos - 1].play()
        setTimeout(() => {
          this.buttons[pos - 1].active = false
        }, 150)
      },
      checking(i){
        this.isChecking = true
        if(this.isChecking){
          if(this.sound) this.sounds[i - 1].play()
          if(i === this.testArray[0]) {
            this.testArray.splice(0, 1)
            if(this.testArray.length === 0){
              this.$emit('newRound')
              this.isChecking = false
            }
          } else {
            this.$root.$emit('gameOver')
            this.isChecking = false
          }
        }
      }
    },
    mounted() {
      this.$root.$on('sound', (val) => {this.sound = val})
    },
    watch: {
      playlist: {
        handler: function(val, old){
          if(old){this.playing()}
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
    box-shadow: 2px 2px 4px 4px rgba($black, .5)
    .button
      width: 120px
      height: 120px
      cursor: pointer
      &:hover
        box-shadow: inset 4px 4px 4px 4px rgba($black, .5)
      &:active
        background: $grey !important
      &.active
        box-shadow: inset 4px 4px 4px 4px rgba($black, .5)
</style>