frontEndTestApp.directive('header', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/header.html',
		replace: true
	};
});