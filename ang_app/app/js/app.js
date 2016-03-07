var app = angular.module("myApp", ['ngRoute', 'ngResource']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/index.html',
        controller: 'MainController'
      })
      .when('/wines', {
        templateUrl: 'partials/wine/index.html',
        controller: 'WineIndexController'
      })

    $locationProvider.html5Mode(true);
});
