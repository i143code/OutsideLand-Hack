discoverlands.config(function($routeProvider){
	$routeProvider
		.when('/users/:id', {
			templateUrl: 'partials/partial1.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})