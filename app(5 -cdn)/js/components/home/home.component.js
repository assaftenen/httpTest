var home = {
	templateUrl:'js/components/home/home.component.html'
	
};

angular
	.module('home')
	.component('home', home)
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				component: 'home'
			});
		$urlRouterProvider.otherwise('/');
	});
