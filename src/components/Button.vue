<template>
  <button>{{ title }}</button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      title: {
        type: String,
        default: 'Title'
      }
    }
  }
</script>

<style lang="sass" scoped>
  button
    cursor: pointer
    background: $blue
    padding: 10px 25px
    color: $white
    border: none
    outline: none
    font-size: 18px
    &:hover
      background: $blue-light
    &:active
      background: $grey
</style>