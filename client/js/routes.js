discoverlands.config(function($routeProvider){
	$routeProvider
		.when('/partial1', {
			templateUrl: 'partials/partial1.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})