/*
    States Controller is implemented to get states data. 
    States will be displayed in a grid and pagination supported.

    @author: Madhura KM
    @date: 12 Sep 2015
*/
frontEndTestApp.controller('statesController', ['$scope', 'apiService', '$location', 'uiGridConstants', function($scope, apiService, $location, uiGridConstants){


	var paginationOptions = {
	    pageNumber: 1,
	    offset: 0,
	    pageSize: 10,
	    sort: "name"
	};


	$scope.getStates = function(){
		var getStatesPromise = apiService.send('GET', 'http://localhost:8888/states?sort='+paginationOptions.sort+'&offset='+paginationOptions.offset+'&limit='+paginationOptions.pageSize);

		getStatesPromise.then(function(response){

			console.log("States ",  response);

			$scope.gridOptions.totalItems = 50;
			$scope.gridOptions.data = response.data;

		});
	}

	$scope.getStates();

	/*$scope.getAbbrevations = function(){
		var getAbbrevationPromise = apiService.send('GET', 'http://localhost:8888/states/abbreviations');

		getAbbrevationPromise.then(function(response){

			console.log("ABBS ",  response);

		});
	}

	$scope.getAbbrevations();

	$scope.getStateData = function(){
		var getStateDataPromise = apiService.send('GET', 'http://localhost:8888/states/CA');

		getStateDataPromise.then(function(response){

			console.log("StateData ",  response);

		});
	}

	$scope.getStateData();*/


	$scope.gridOptions = {
        paginationPageSizes: [5, 10],
        paginationPageSize: 10,
        useExternalPagination: true,
        useExternalSorting: true,
	    columnDefs: [
	      	{
	      		field: 'name', 
	      		displayName: 'Name'
	      	},
	      	{
	      		field: 'abbreviation', 
	      		displayName: 'Abbriviation'
	      	},
	      	{
	      		field: 'capital',
	      		displayName: 'Capital' 
	      	},
	      	{
	      		field: 'most-populous-city',
	      		displayName: 'Populour City' 
	      	},
	      	{
	      		field: 'population',
	      		displayName: 'Population' 
	      	},
	      	{
	      		field: 'square-miles',
	      		displayName: 'Square Miles' 
	      	},
	      	{
	      		field: 'time-zone-1',
	      		displayName: 'Time Zone 1' 
	      	},
	      	{
	      		field: 'time-zone-2',
	      		displayName: 'Time Zone 2' 
	      	},
	      	{
	      		field: 'dst',
	      		displayName: 'Dst' 
	      	}
	    ],
	    onRegisterApi: function(gridApi) {
			gridApi.core.on.sortChanged($scope, function(grid, sortColumns) {

				if(sortColumns[0].sort.direction == 'asc'){
					paginationOptions.sort = sortColumns[0].field;
				}else {
					paginationOptions.sort = '-'+sortColumns[0].field;
				}
				
				$scope.getStates();
			});
			gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
				paginationOptions.pageNumber = newPage;
				paginationOptions.pageSize = pageSize;
				paginationOptions.offset = (newPage - 1) * pageSize;
				$scope.getStates();
			});
		}

  	};




}]);