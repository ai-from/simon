<template>
  <button @click="$emit('btnStart')">{{ title }}</button>
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
    padding: 15px 25px
    color: $white
    border: none
    border-radius: 10px
    outline: none
    font-size: 20px
    &:hover
      background: $blue-light
    &:active
      background: $grey
</style>