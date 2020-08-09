<template>
  <div class="field">
    <label :for="id">{{ label }}:</label>
    <input
      :id="id"
      type="checkbox"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
  export default {
    name: 'Checkbox',
    props: {
      value: {},
      id: {
        type: String,
        default: 'id'
      },
      label: {
        type: String,
        default: 'Label'
      }
    }
  }
</script>

<style lang="sass" scoped>
  .field
    display: grid
    width: min-content
    grid-template-columns: repeat(2, min-content)
    grid-gap: 5px
    align-items: center
    label, input
      cursor: pointer
    input
      width: 16px
      height: 16px
</style>