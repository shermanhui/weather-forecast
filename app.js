// module
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

// router
myApp.config(function ($routeProvider) {

	$routeProvider

	.when('./', {
		templateURL: 'pages/home.html',
		controller: 'mainController'
	})

	.when('/forecast', {
		templateURL: 'pages/weather.html',
		controller: 'weatherController'
	});
});

// controllers
myApp.controller('mainController', ['$scope', function(){

}]);

myApp.controller('weatherController', ['$scope', function(){

}]);

