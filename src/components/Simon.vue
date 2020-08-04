<template>
  <div class="simon">
    <div class="title">{{ title }}</div>
    <v-four-buttons />
    <v-settings />
  </div>
</template>

<script>
  import FourButtons from "./FourButtons"
  import Settings from "./Settings"
  export default {
    name: 'Simon',
    data: () => ({
      title: 'Simon The Game'
    }),
    components: {
      'v-four-buttons': FourButtons,
      'v-settings': Settings
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