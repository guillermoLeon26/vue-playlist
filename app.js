new Vue({
	el: '#vue-app',
	data: {
		output: ''
	},
	methods:{
		readRefs: function () {
			this.output = this.$refs.input.value;
			console.log(this.$refs.test.html);
		}
	}
});