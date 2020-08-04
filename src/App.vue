<template>
  <div id="app">
    <v-simon />
  </div>
</template>

<script>
import Simon from "./components/Simon"
export default {
  name: 'App',
  components: {
    'v-simon': Simon
  }
}
</script>

<style lang="sass">

</style>
