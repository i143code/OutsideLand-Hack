discoverlands.config(function($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: 'partials/login.html'
		})
		.when('/lineup', {
			templateUrl: 'partials/linup.html'
		})
		.when('/view', {
			templateUrl: 'partials/view.html'
		})
		.when('/somethingelse', {
			templateUrl: 'partials/somethingelse.html'
		})
		.otherwise({
			redirectTo: '/'
		})
});