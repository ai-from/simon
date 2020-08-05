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
      <div class="won">You won!</div>
      <div class="lose">You lose!</div>
    </div>
  </div>
</template>

<script>
  import Button from "./Button"
  export default {
    name: 'Settings',
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
      'v-button': Button
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
      height: 48px
      background: $grey
      .won
        color: $green
        display: none
      .lose
        color: $red
        display: none
</style>