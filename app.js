new Vue({
	el: '#vue-app',
	data: {
		name: 'Guillermo',
		job: 'Ninja'
	},
	methods:{
		greet: function (time) {
			return 'Good '+ time + ' ' + this.name;
		}
	}
});