<template>
  <div class="settings">
    <hr>
    <div class="wrap">

      <div class="round">
        <div>Round:</div>
        <div>{{ round }}</div>
      </div>

      <div class="level">
        <div>Level:</div>
        <div>{{ level }}</div>
      </div>

    </div> <!-- wrap -->

    <v-button title="Start" />

    <div class="res">
      <div v-if="lose" class="lose">Game over</div>
      <div v-if="lose" class="rounds">You passed {{ passedRounds }} round(s)</div>
    </div>

    <v-checkbox
      ID="sound"
      label="Sound"
      @input="checkboxClick"
    />

  </div>
</template>

<script>
  import Button from "./Button"
  import Checkbox from "./Checkbox"
  export default {
    name: 'Settings',
    data: () => ({
      lose: false,
      passedRounds: 0,
      sound: false
    }),
    props: {
      round: {
        type: Number,
        default: 0
      },
      level: {
        type: Number,
        default: 0
      }
    },
    components: {
      'v-button': Button,
      'v-checkbox': Checkbox
    },
    methods: {
      checkboxClick(){
        this.sound = !this.sound
        this.$root.$emit('sound', this.sound)
      }
    },
    mounted() {
      this.$root.$on('startGame', () => {
        this.lose = false
      })
      this.$root.$on('gameOver', () => {
        this.lose = true
      })
      this.$root.$on('passedRounds', round => {
        this.passedRounds = round
      })
    }
  }
</script>

<style lang="sass" scoped>
  .settings
    width: 240px
    margin: 0 auto
    .wrap
      display: grid
      grid-template-columns: 50% 50%
      align-items: center
      margin: 20px 0
      .round
        display: grid
        grid-template-columns: repeat(2, min-content)
        grid-gap: 5px
        font-size: 20px
      .level
        display: grid
        grid-template-columns: repeat(2, min-content)
        grid-gap: 5px
        font-size: 20px
        margin-left: auto
    button
      width: 100%
    .res
      font-size: 24px
      text-align: center
      margin: 20px 0
      padding: 10px 0
      height: 64px
      background: $grey
      color: $white
      .rounds
        font-size: 14px

</style>