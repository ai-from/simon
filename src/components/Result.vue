<template>
  <div class="res">
    <div v-if="lose">
      <div class="lose">Game over</div>
      <div class="rounds">You passed {{ passedRounds }} round(s)</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Result',
    props: {
      lose: {
        type: Boolean,
        default: false
      },
      passedRounds: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="sass" scoped>
  .res
    width: 100%
    font-size: 24px
    text-align: center
    margin: 20px 0
    padding: 10px 0
    height: 64px
    background: $grey
    color: $white
    border-radius: 10px
    .rounds
      font-size: 14px
</style>