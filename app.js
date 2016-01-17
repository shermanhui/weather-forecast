// module
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

// router
myApp.config(function ($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})

	.when('/forecast', {
		templateUrl: 'pages/weather.html',
		controller: 'weatherController'
	});
});

// services
myApp.service('cityService', function(){
	this.city = "Vancouver, BC";
});

// controllers
myApp.controller('mainController', ['$scope', 'cityService', function($scope, cityService){

	$scope.city = cityService.city;

	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});
}]);

myApp.controller('weatherController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){

	$scope.city = cityService.city;

	$scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=ef9657c3d076894f78e9b2c86a213767', {
		callback: "JSON_CALLBACK"
	}, { get: { method: "JSONP"}});

	$scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: 2});

	console.log($scope.weatherResult);
}]);


