<template>
  <div class="monitor">
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
  </div>
</template>

<script>
  export default {
    name: 'Monitor',
    props: {
      round: {
        type: Number,
        default: 0
      },
      level: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="sass" scoped>
  .monitor
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
</style>