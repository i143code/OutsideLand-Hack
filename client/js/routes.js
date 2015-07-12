discoverlands.config(function($routeProvider){
	$routeProvider
		.when('/users/:id', {
			templateUrl: 'partials/partial1.html'
		})
		.when('/login', {
			templateUrl: 'partials/login.html'
		})
		.when('/lineup', {
			templateUrl: 'partials/linup.html'
		})
		.when('/view', {
			templateUrl: 'partials/view.html'
		})
		.when('/test/:id', {
			templateUrl: 'partials/newblank.html'
		})

})
