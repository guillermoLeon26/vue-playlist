new Vue({
	el: '#vue-app',
	data: {
		name: 'Guillermo',
		job: 'Ninja',
		website: 'http://www.thenetninja.co.uk',
		websiteTag: '<a href="http://www.thenetninja.co.uk">website</a>'
	},
	methods:{
		greet: function (time) {
			return 'Good '+ time + ' ' + this.name;
		}
	}
});