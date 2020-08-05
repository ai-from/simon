<template>
  <div class="simon">
    <div class="title">{{ title }}</div>
    <v-four-buttons />
    <v-settings
      :round="round"
      :level="level"
    />
    <button @click="round++">Round+</button>
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
      state: [0, 0, 0, 0],
      round: 0,
      time: [1.5, 1, .4]
    }),
    computed: {
      level() {return this.isGameOn ? Math.floor(this.round / 4.1) + 1 : 0}
    },
    components: {
      'v-four-buttons': FourButtons,
      'v-settings': Settings
    },
    methods: {
      updateGame(){
        this.state = [0, 0, 0, 0]
        this.round = 1
      },
      startGame(){
        console.log('playing')

      },
      getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
    },
    mounted(){
      this.$root.$on('btnStart', () => {
        this.isGameOn = true
        this.updateGame()
        this.startGame()
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