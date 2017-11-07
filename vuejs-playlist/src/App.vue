<template>
  <div>
    <formHelper>
      <div slot="form-header">
        <h3>This the title of the form</h3>
        <p>Imformation about the form</p>
      </div>

      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="text" placeholder="password" required>
      </div>

      <div slot=form-controls>
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </formHelper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'

export default {
  components: {
    'formHelper': formHelper,
  },  
  data () {
    return {
      title: 'I am a dynamic slot title.'
    }
  },
  methods:{
    
  }
}
</script>

<style>

</style>
