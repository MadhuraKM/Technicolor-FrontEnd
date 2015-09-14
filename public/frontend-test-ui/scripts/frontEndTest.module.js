var frontEndTestApp = angular.module('frontEndTestApp', ['ngRoute', 'ui.grid', 'ui.grid.pagination']);

frontEndTestApp.run(function($rootScope, $location){

	$rootScope.location = $location;

})