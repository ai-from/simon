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
        default: []
      }
    },
    methods: {
      playList(){
        console.log('----------playing list----------')
        this.readList(1500, 500)
      },
      readList(levelTime, beforePlaying){
        let i = 1
        const t = this.playlist

        setTimeout(function(){
          console.log(t[0].i + '  ' + t[0].pos + '  ' + t[0].val)
          if (t.length > 1) {
            const playing = setInterval(function(){
              console.log(t[i].i + '  ' + t[i].pos + '  ' + t[i].val)
              i++
              if (i > t.length - 1) clearInterval(playing)
            }, levelTime)
          }
        }, beforePlaying)

      }
    },
    watch: {
      playlist: {
        handler: function(val, old){
          if (old){this.playList()}
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