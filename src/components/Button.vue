<template>
  <button @click="btnStart">{{ title }}</button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      title: {
        type: String,
        default: 'Title'
      }
    },
    methods: {
      btnStart() {this.$root.$emit('btnStart')}
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