'use strict';

/**
 * @ngdoc overview
 * @name itp301FinalProjectApp
 * @description
 * # itp301FinalProjectApp
 *
 * Main module of the application.
 */
angular
  .module('itp301FinalProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
