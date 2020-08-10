<template>
  <div class="simon">

    <div class="title">{{ title }}</div>

    <v-four-buttons
      :playlist="state"
      :buttons="buttons"
      :level="level"
      :isGameOn="isGameOn"
      :sound="sound"
      :sounds="sounds"
      :speed="speed"
      @newRound="addRound"
      @gameOver="gameOver"
    />

    <v-monitor
      :round="round"
      :level="level"
    />

    <v-button title="Start" @btnStart="startGame" />

    <v-result
      :lose="lose"
      :passedRounds="passedRounds"
    />

    <v-checkbox
      id="sound"
      label="Sound"
      @input="checkboxClick"
    />

  </div>
</template>

<script>
  import FourButtons from "./FourButtons"
  import Monitor from "./Monitor"
  import Button from "./Button"
  import Result from "./Result"
  import Checkbox from "./Checkbox"
  export default {
    name: 'Simon',
    data: () => ({
      title: 'Simon The Game',
      isGameOn: false,
      state: [{i: 0, pos: 0, val: 0}],
      round: 0,
      speed: [650, 500, 400],
      lose: false,
      passedRounds: 0,
      sound: false,
      buttons: ['orange', 'pink', 'indianred', 'gold'].map(x => ({color: x, active: false})),
      sounds: [1, 2, 3, 4].map((x) => new Audio(require(`./../sounds/${x}.mp3`)))
    }),
    components: {
      'v-four-buttons': FourButtons,
      'v-monitor': Monitor,
      'v-button': Button,
      'v-result': Result,
      'v-checkbox': Checkbox
    },
    computed: {
      level() {
        let curr = Math.floor(this.round / 4.1) + 1
        if(this.isGameOn) return curr >= 4 ? 3 : curr
        else return 0
      }
    },
    methods: {
      startGame(){
        this.isGameOn = true
        this.state = []
        this.round = 1
        this.lose = false
        this.addElement()
      },
      getRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min
      },
      addElement(){
        this.state.push({i: this.round, pos: this.getRandom(1,4), val: this.getRandom(1,2)})
      },
      addRound(){
        this.round++
        this.addElement()
      },
      checkboxClick(){
        this.sound = !this.sound
      },
      gameOver(){
        this.isGameOn = false
        this.state = [{i: 0, pos: 0, val: 0}]
        this.lose = true
        this.passedRounds = this.round - 1
        this.round = 0
      }
    }
  }
</script>

<style lang="sass">
  .simon
    width: 240px
    margin: 0 auto
    .title
      font-size: 30px
      color: $grey
      text-align: center
      margin-bottom: 30px
    button
      width: 100%
      margin: 0 auto
</style>