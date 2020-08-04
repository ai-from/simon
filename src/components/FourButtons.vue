<template>
  <div class="four-buttons">
    <div
      class="button"
      v-for="(item, index) in buttons"
      :key="index"
      :class="item.color"
    ></div>
  </div>
</template>

<script>
  export default {
    name: 'FourButtons',
    data: () => ({
      buttons: [
        {color: 'red'},
        {color: 'green'},
        {color: 'blue'},
        {color: 'yellow'}
      ]
    })
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
      &.red
        background: $red
      &.green
        background: $green
      &.blue
        background: $blue
      &.yellow
        background: $yellow


</style>