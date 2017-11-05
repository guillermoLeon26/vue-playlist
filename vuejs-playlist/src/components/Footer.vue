<template>
  <footer>
    <p>{{ copyrith }} {{ title }}</p>
  </footer>
</template>

<script>
export default {
  props:{
    title:{
      type: String
    }
  },
  data () {
    return {
      copyrith: 'Copyrith 2017 '
    }
  }
}
</script>

<style scoped>
  footer{
    background: #222;
    padding: 6px;
  }
  p{
    color: lightgreen;
    text-align: center;
  }
</style>
