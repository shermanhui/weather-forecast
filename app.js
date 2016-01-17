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

// controllers
myApp.controller('mainController', ['$scope', function($scope){

}]);

myApp.controller('weatherController', ['$scope', function($scope){

}]);

