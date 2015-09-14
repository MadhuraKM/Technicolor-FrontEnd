/*
    Guest Controller is implemented to have functionalities of the guest book, which includes 
    read and write messages. 

    @author: Madhura KM
    @date: 12 Sep 2015
*/
frontEndTestApp.controller('guestController', ['$scope', 'apiService', '$location', 'uiGridConstants', function($scope, apiService, $location, uiGridConstants){

	$scope.readMessage = function(){
		var readMessagePromise = apiService.send('GET', 'http://localhost:8888/read');

		readMessagePromise.then(function(response){			

			$scope.messages = response.data;

		});
	}

	$scope.readMessage();

	$scope.writeMessage = function(){

		if($scope.msgForm.$valid){

			var message = { phone : $scope.phoneNo, message : $scope.message};

			var writeMessagePromise = apiService.send('POST', 'http://localhost:8888/write', message);

			writeMessagePromise.then(function(response){
				$scope.msgForm.$setPristine();
				$scope.phoneNo = "";
				$scope.message = "";

				$scope.messages = response.data;

			},
			function(error, status){
				$scope.msgForm.$setPristine();
			});
		} else{
			return false;
		}
	}


}]);