new Vue({
	el: '#vue-app',
	data: {
		name: 'Guillermo',
		job: 'Ninja',
		age: 25,
		website: 'http://www.thenetninja.co.uk',
		websiteTag: '<a href="http://www.thenetninja.co.uk">website</a>',
		x: 0,
		y: 0
	},
	methods:{
		greet: function (time) {
			return 'Good '+ time + ' ' + this.name;
		},
		add:function (inc) {
			this.age += inc;
		},
		subtract:function (dec) {
			this.age -= dec;
		},
		updateXY:function (event) {
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		click:function () {
			alert('You clicked me');
		}
	}
});