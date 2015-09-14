/*
    API service is implemented to have reusable code to make API calls and handle success and error 
    responses. 

    @author: Madhura KM
    @date: 12 Sep 2015
*/
frontEndTestApp.factory('apiService', function($rootScope, $http, $location){

	return{

		send : function(method, uri, data) {

			var req = "";

			if(data !== undefined){
                req = {
                    url: uri,
                    method: method,
                    data: data
                };
            }else{
	            req = {
	                url: uri,
	                method: method
	              
	            };  
            }

			var promise = $http(req)
                .success(function(jsondata, status, headers, config) {
                    $rootScope.serverError = "";                    
                })
                .error(function(error, status) {
                    $rootScope.serverError = error;                    
                });

        	return promise;

		}

	}

});