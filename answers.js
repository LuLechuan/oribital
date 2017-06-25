Vue.component('answers', {
	props: ['list'],
	template: '#answers-template',

	methods: {
		deleteAnswer: function(answer) {
			this.list.$remove(answer);
		}
	}
});

var app = new Vue({
			el: '#child',

			data: {
				answers: ['Full Version', 'Short Cut', 'Imaging here is some texts']
			},

			mounted() {
				document.querySelector('#button').addEventListener('click', () => {
				let answer = document.querySelector('#input');

				app.answers.push(answer.value);

				answer.value = '';
				});
			}
		});