<template>
  <div class="simon">
    <div class="title">{{ title }}</div>
    <v-four-buttons
      :playlist="state"
      :level="level"
      :isGameOn="isGameOn"
      @newRound="addRound"
    />
    <v-settings
      :round="round"
      :level="level"
    />
<!--    <button @click="addRound">addRound</button>-->
<!--    <pre>{{ state }}</pre>-->
  </div>
</template>

<script>
  import FourButtons from "./FourButtons"
  import Settings from "./Settings"
  export default {
    name: 'Simon',
    data: () => ({
      title: 'Simon The Game',
      isGameOn: false,
      state: [{i: 0, pos: 0, val: 0}],
      round: 0
    }),
    computed: {
      level() {
        let curr = Math.floor(this.round / 4.1) + 1
        if(this.isGameOn){
          return curr >= 4 ? 3 : curr
        } else return 0
      }
    },
    components: {
      'v-four-buttons': FourButtons,
      'v-settings': Settings
    },
    methods: {
      updateGame(){
        this.state = []
        this.round = 1
      },
      startGame(){
        this.updateGame()
        this.addElement()
        this.$root.$emit('startGame')
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
      }
    },
    mounted(){
      this.$root.$on('btnStart', () => {
        this.isGameOn = true
        this.updateGame()
        this.startGame()
      })
      this.$root.$on('gameOver', () => {
        this.isGameOn = false
        this.state = [{i: 0, pos: 0, val: 0}]
        this.$root.$emit('passedRounds', this.round - 1)
        this.round = 0
      })
    }
  }
</script>

<style lang="sass">
  .simon
    .title
      font-size: 30px
      color: $grey
      text-align: center
      margin-bottom: 30px
</style>