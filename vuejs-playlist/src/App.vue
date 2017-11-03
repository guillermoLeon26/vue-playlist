<template>
  <div>
    <h1>{{title}}</h1>    
    <p>{{greeting()}}</p>
  </div>

</template>

<script>
export default {
  data () {
    return {
      title: 'You fist Vue file, wooo!' 
    }
  },
  methods:{
    greeting: function () {
      return 'heeeeey cowboy';
    }
  }
}
</script>

<style>

</style>
