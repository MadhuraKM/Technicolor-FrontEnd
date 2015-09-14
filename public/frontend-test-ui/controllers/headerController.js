/*
    Header Controller is implemented to have functinalities of header(Logout). 

    @author: Madhura KM
    @date: 12 Sep 2015
*/
frontEndTestApp.controller('headerController', ['$scope', 'apiService', '$location', '$rootScope', function($scope, apiService, $location, $rootScope){


	$scope.logout = function() {
		
		var logoutPromise = apiService.send('GET', 'http://localhost:8888/logout');

		logoutPromise.then(function(response){

			$rootScope.name = undefined;
			$location.path('/login');

		});

	}

}]);