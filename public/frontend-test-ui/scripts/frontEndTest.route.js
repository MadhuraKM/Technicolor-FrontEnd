frontEndTestApp.config(function($routeProvider){

	$routeProvider.

	when('/login', {
        
        templateUrl: 'views/login.html'

	}).when('/states', {

		templateUrl: 'views/states.html'

	}).when('/guestBook', {

		templateUrl: 'views/guestBook.html'

	}).otherwise({

		redirectTo : '/login'

	});

});