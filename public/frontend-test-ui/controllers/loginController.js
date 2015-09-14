/*
    Login Controller is implemented to handle user Login. 

    @author: Madhura KM
    @date: 12 Sep 2015
*/
frontEndTestApp.controller('loginController', ['$scope', 'apiService', '$location', '$rootScope', function($scope, apiService, $location, $rootScope){

	$scope.userName= "";
	$scope.userPassword = "";

	$scope.login = function() {

		if($scope.loginForm.$valid){
		
			var userDetails = {  user : $scope.userName, password : $scope.userPassword };

			var loginPromise = apiService.send('POST', 'http://localhost:8888/login', userDetails);

			loginPromise.then(function(response){

				$rootScope.name = $scope.userName;
				$location.path('/states');

			},
			function(error, status){
				$scope.loginForm.$setPristine();
			});
		}else{
			return false;
		}
	}

}]);