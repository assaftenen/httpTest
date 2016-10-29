var about = {
	templateUrl: 'js/components/about/about.component.html'
};

angular
	.module('about')
	.component('about', about)
	.config(function ($stateProvider) {
		$stateProvider
			.state('about', {
				url: '/about',
				component: 'about'
			});
	});
