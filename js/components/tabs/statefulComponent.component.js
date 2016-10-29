var statefulComponent = {
	template: `
		<div>
			<pre>{{ $ctrl.user | json }}</pre>
			<stateless-component
				user="$ctrl.user"
				on-update="$ctrl.updateUser($event);">
			</stateless-component>
		</div>
	`,
	controller: function () {
		this.user = {
			name: 'Todd Motto',
			location: 'England, UK'
		};
		
		this.onInit = function(){
			console.log("Yam");
		};
		
		
		this.updateUser = function (event) {
			this.user = event.user;
		};
	}
};

angular
	.module('state')
	.component('statefulComponent', statefulComponent)
	.config(function ($stateProvider) {
		$stateProvider
			.state('state', {
				url: '/state',
				component: 'statefulComponent',
				
			});
	});