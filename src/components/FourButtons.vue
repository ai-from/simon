<template>
  <div class="four-buttons">
    <div
      class="button"
      v-for="(item, index) in buttons"
      :key="index"
      :style="{background: item.color}"
    ></div>
  </div>
</template>

<script>
  export default {
    name: 'FourButtons',
    data: () => ({
      buttons: [
        {color: 'orange'},
        {color: 'pink'},
        {color: 'brown'},
        {color: 'gold'}
      ],
      time: [1.5, 1, .4]
    }),
    props: {
      playlist: {
        type: Array,
        default: [{i: -1, pos: 0, val: 0}]
      }
    },
    methods: {
      playList(){
        console.log('playList')
        console.log('-----------------')
        this.playlist.forEach(x => {
          console.log(x.i + '  ' + x.pos + '  ' + x.val)
        })
      }
    },
    watch: {
      playlist: {
        handler: function(val, old){
          this.playList()
        },
        deep: true,
        immediate: true
      }
    }
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
      &:hover
        box-shadow: inset 4px 4px 4px 4px rgba($black, .5)
      &:active
        background: $grey !important
</style>